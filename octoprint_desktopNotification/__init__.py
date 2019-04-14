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

__plugin_name__ = "Desktop Notification"
__plugin_implementation__ = DesktopNotificationPlugin()
