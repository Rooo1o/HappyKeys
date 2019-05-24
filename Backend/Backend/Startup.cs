using Backend.Data;
using Backend.Data.Repositories;
using Backend.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using NSwag;
using NSwag.SwaggerGeneration.Processors.Security;
using System;
using System.Text;

namespace Backend
{
  public class Startup
  {

    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {


      services.AddCors();
      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

      services.AddDbContext<VirturoosjeContext>(options =>
      options.UseSqlServer(Configuration.GetConnectionString("GebruikerContext")));

      services.AddScoped<VirturoosjeDataInitializer>();
      services.AddScoped<IGebruikersRepository, GebruikerRepository>();
      services.AddScoped<ISheetRepository, SheetRepository>();

      services.AddOpenApiDocument(c =>
      {
        c.DocumentName = "apidocs";
        c.Title = "HappyKeys API";
        c.Version = "v1";
        c.Description = "De API voor de frontend webapplicatie HappyKeys van Robin Roos.";
        c.DocumentProcessors.Add(new SecurityDefinitionAppender("JWT Token", new SwaggerSecurityScheme
        {
          Type = SwaggerSecuritySchemeType.ApiKey,
          Name = "Authorization",
          In = SwaggerSecurityApiKeyLocation.Header,
          Description = "Copy 'Bearer' + valid JWT token into field"
        }
        ));
        c.OperationProcessors.Add(new OperationSecurityScopeProcessor("JWT Token"));
      });



      services.AddAuthentication(x =>
      {
        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(x =>
      {
        x.RequireHttpsMetadata = false;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"])),
          ValidateIssuer = false,
          ValidateAudience = false,
          RequireExpirationTime = true //Ensure token hasn't expired
        };
      });

      services.AddIdentity<IdentityUser, IdentityRole>(cfg => cfg.User.RequireUniqueEmail = true).AddEntityFrameworkStores<VirturoosjeContext>();

      services.Configure<IdentityOptions>(options =>
      {
        // Password settings.
        options.Password.RequireDigit = false;
        options.Password.RequireLowercase = false;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequireUppercase = false;
        options.Password.RequiredLength = 5;
        options.Password.RequiredUniqueChars = 0;

        // Lockout settings.
        options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
        options.Lockout.MaxFailedAccessAttempts = 5;
        options.Lockout.AllowedForNewUsers = true;

        // User settings.
        options.User.AllowedUserNameCharacters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
        options.User.RequireUniqueEmail = true;

      });
    }


    private object IdentityRole(Func<object, object> p)
    {
      throw new NotImplementedException();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, VirturoosjeDataInitializer gebruikerDataInitializer)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }

      app.UseHttpsRedirection();

      app.UseCors(builder => builder
       .AllowAnyOrigin()
       .AllowAnyMethod()
       .AllowAnyHeader()
       .AllowCredentials()
      );
      app.UseMvc();
      app.UseSwaggerUi3();
      app.UseSwagger();
      app.UseAuthentication();
      gebruikerDataInitializer.InitializeData().Wait();
    }
  }
}
