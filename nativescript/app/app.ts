// nativescript
import { NativeScriptModule, platformNativeScriptDynamic } from 'nativescript-angular';

/**
 * Config
 * Seed provided configuration options
 */
import { Config } from './app/frameworks/core/utils/config';
import { Page } from 'ui/page';
Config.PageClass = Page;

// (required) platform target (allows component decorators to use the right view template)
Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

// app
//import { NativeModule } from './native.module';
import { ItnNativeModule } from './itn.native.module';
//platformNativeScriptDynamic().bootstrapModule(NativeModule);
platformNativeScriptDynamic().bootstrapModule(ItnNativeModule);
