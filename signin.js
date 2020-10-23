export const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      behaviour: "web",
      androidClientId:
        "806210984554-ecd9fdca06tmdh3rnsobs9b4g9978qo8.apps.googleusercontent.com",
      // iosClientId: YOUR_CLIENT_ID_HERE,
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
};
