using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Forms;
using NetDimension.NanUI;
using NetDimension.NanUI.Browser;

namespace ReactDesktopApplicaiton
{
    class MainWindow : Formium
    {
        public override string StartUrl => "http://www.app.local/index.html";

        public override HostWindowType WindowType => HostWindowType.Borderless;

        protected override Control LaunchScreen => null;

        protected override void OnRegisterGlobalObject(JSObject global)
        {
            
        }

        protected override void OnWindowReady(IWebBrowserHandler browserClient)
        {
            // WebBrowser.ShowDevTools();
        }
    }
}
