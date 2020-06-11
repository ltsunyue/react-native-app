package com.app;
// 启动屏
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
// ---------------------结束
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
/**
   * 启动屏
   */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
  /**
   * 系统
   */
  @Override
  protected String getMainComponentName() {
    return "app";
  }
}
