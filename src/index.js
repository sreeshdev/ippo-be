const serverSetup = async () => {
  // import required modules
  const serverInit = await import("./configs/initServer");

  // run server setup
  await serverInit.initServer();
};

serverSetup();
