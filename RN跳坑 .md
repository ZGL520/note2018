react-native 

----

1，在mac上初次使用react-native命令，出现如下错误

	xcrun: error: unable to find utility "instruments", not a developer tool or in PATH
	
	
解决办法：

	//在 终端执行如下命令,前提是已经安装xcode
	sudo xcode-select -s /Applications/Xcode.app/Contents/Developer/
	
	
	
	
2,每次删除依赖库后依次运行以下三条记录
	
	//1
	unlink node_modules/react-native/third-party/glog-0.3.4/test-driver
	
	//2
	cd node_modules/react-native/third-party/glog-*

	//3
	../../scripts/ios-configure-glog.sh


3,解决 'boost/iterator/iterator_adaptor.hpp' file not found’ 及控制台":CFBundleIdentifier", Does Not Exist

	"react-native": "0.46.1"
	这个问题产生原因：
	* /Users/Vanessa/.rncache 中 boost_1_63_0.tar.gz， double-conversion-1.1.5.tar.gz， folly-2016.09.26.00.tar.gz， glog-0.3.4.tar.gz 文件下载不完整
	* node_modules/react-native/third-party 文件不完整（好像是0.45以上的版本出现的））
解决方案：

	//删除 .rncache 后重新下载
	rm -rf node_modules && rm -rf ~/.rncache && yarn install
	
	
3,ios打包问题

![C1F4056501C8208559F432292B25CD13](media/C1F4056501C8208559F432292B25CD13.png)



4,android studio 手动引入原生库

在项目如下路径
	
	[项目名]/android/
	
找到配置文件
	
	settings.gradle
	
添加配置描述

	include ':react-native-view-shot'
	project(':react-native-view-shot').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-view-shot/android')
	
	
然后打开Android studio -> 开开 file -> project structure -> dependencies -> 点击加号‘+’ -> module dependency -> 选择需要添加的依赖


android 映入插件库配置

1，[项目名]/android/下

在settings.gradle文件内添加配置，如下

	include ':react-native-view-shot'
	project(':react-native-view-shot').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-view-shot/android')
	
2，[项目名]/android/app/下

build.gradle文件内添加配置，如下

	implementation project(':react-native-view-shot')

3，[项目名]/android/app/src/main/java/下

MainApplication.java文件内添加配置，如下

	import fr.greweb.reactnativeviewshot.RNViewShotPackage;

	new RNViewShotPackage(),


然后重新编译项目

