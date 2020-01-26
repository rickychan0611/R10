module.exports = {
  // project: {
  //   ios: {},
  //   android: {}, // grouped into "project"
  // },
  assets: ["./assets/fonts"], // stays the same
  dependency: {
    platforms: {
        android: {
            sourceDir: './lib/android',
        },
    },
  },
}
