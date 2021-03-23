using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FlatBrowser.Startup))]
namespace FlatBrowser
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            ConfigureAuth(app);
        }
    }
}
