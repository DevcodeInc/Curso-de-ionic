jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks ./platforms/android/build/outputs/apk/android-release-unsigned.apk iongram
/Users/nicolas/Development/android-sdk/build-tools/27.0.3/zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-unsigned.apk IonGram.apk
/Users/nicolas/Development/android-sdk/build-tools/27.0.3/apksigner verify IonGram.apk
