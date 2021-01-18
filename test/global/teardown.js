const mongoTeardown =require('@shelf/jest-mongodb/teardown')

module.exports=async()=>{
    await mongoTeardown();
}