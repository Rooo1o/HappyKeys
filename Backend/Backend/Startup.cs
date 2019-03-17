using Backend.Data;
using Backend.Data.Repositories;
using Backend.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

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
      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

      services.AddDbContext<GebruikerContext>(options =>
      options.UseSqlServer(Configuration.GetConnectionString("GebruikerContext")));

      services.AddScoped<GebruikerDataInitializer>();
      services.AddScoped<IGebruikersRepository, GebruikerRepository>();

      services.AddOpenApiDocument(c =>
      {
        c.DocumentName = "apidocs";
        c.Title = "Gebruiker API";
        c.Version = "v1";
        c.Description = "The GebruikerAPI documentation description.";
      });

      services.AddCors(options => options.AddPolicy("AllowAllOrigins", builder => builder.AllowAnyOrigin()));

    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, GebruikerDataInitializer gebruikerDataInitializer)
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
      app.UseMvc();
      app.UseSwaggerUi3();
      app.UseSwagger();

      gebruikerDataInitializer.InitializeData();
    }
  }
}
