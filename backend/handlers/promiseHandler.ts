const handle = async (promise: Promise<any>) => {
    try {
    const data = await promise;
    return ([data, undefined]);
    } catch (error) {
    return await Promise.resolve([undefined, error]);
    }
  }

module.exports = handle;