react-native 

----

1，在mac上初次使用react-native命令，出现如下错误

	xcrun: error: unable to find utility "instruments", not a developer tool or in PATH
	
	
解决办法：

	//在 终端执行如下命令,前提是已经安装xcode
	sudo xcode-select -s /Applications/Xcode.app/Contents/Developer/

