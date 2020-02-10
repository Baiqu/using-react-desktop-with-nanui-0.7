using NetDimension.NanUI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ReactDesktopApplicaiton
{
    static class Program
    {
        /// <summary>
        ///  The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.SetHighDpiMode(HighDpiMode.SystemAware);
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);


            Bootstrap
                .Initialize()
                .UseAssembledResource(System.Reflection.Assembly.GetExecutingAssembly(), ResourceHandlerScheme.Http, "www.app.local", "build")
                .Run(() => new MainWindow());
        }
    }
}
