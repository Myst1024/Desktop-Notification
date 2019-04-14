# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin

class DesktopNotificationPlugin(octoprint.plugin.StartupPlugin,
		                        octoprint.plugin.TemplatePlugin,
                                octoprint.plugin.AssetPlugin,
                                octoprint.plugin.EventHandlerPlugin):
    def on_after_startup(self):
        self._logger.info("Enabled Desktop Notification Plugin!")

    def get_assets(self):
        return dict(
            js=["js/notification.js"]
        )

    def get_update_information(*args, **kwargs):
    return dict(
        updateplugindemo=dict(
            displayName=self._plugin_name,
            displayVersion=self._plugin_version,

            type="github_release",
            current=self._plugin_version,
            user="myst1024",
            repo="OctoPrint-UpdatePluginDemo",

            pip="https://github.com/Myst1024/Desktop-Notification/archive/{target}.zip"
        )
    )

__plugin_name__ = "Desktop Notification"
__plugin_implementation__ = DesktopNotificationPlugin()
__plugin_version__ = "1.0.0"
__plugin_hooks__ = {
"octoprint.plugin.softwareupdate.check_config": get_update_information
}