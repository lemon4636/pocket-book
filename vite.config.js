import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";
import reactRefresh from "@vitejs/plugin-react-refresh";

// const useDevMode = true; // true===不使用热更新插件
const qinakunAppName = "pocket-book";

export default ({ mode }) => {
  const __DEV__ = mode === "development";
  return defineConfig({
    base: "/" + qinakunAppName,
    // experimental: {
    //   // renderBuiltUrl(filename, { hostId, hostType, type }) {
    //   renderBuiltUrl(filename, options) {
    //     console.log('hhhhhh===', filename, options)
    //     if (options.type === 'public') {
    //       return 'https://www.domain.com/' + filename
    //     }
    //     else {
    //       return 'https://cdn.domain.com/assets/' + filename
    //     }
    //   }
    // },
    plugins: [
      //
      ...(__DEV__ ? [] : [reactRefresh()]),
      react(),
      qiankun(qinakunAppName, {
        __DEV__,
      }),
    ],
    resolve: {
      alias: {
        "@": __dirname + "/src",
      },
    },
    server: {
      host: "0.0.0.0",
      port: "5174",
      // cors: true,
      // headers: {
      //   "access-control-allow-origin": "*",
      // },
      proxy: {
        "/pb-api": {
          target: "https://v2-node02.lemonyun.net",
          changeOrigin: true,
        },
        "/crm-app": {
          target: "https://v2-node02.lemonyun.net",
          changeOrigin: true,
        },
      },
    },
  });
};
