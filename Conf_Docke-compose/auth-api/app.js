import express from "express";

const app = express();
const eng = process.env;
//const PORT = env.PORT || 8080;
const PORT = 8080;

app.get('/api/status', (req, res) => {
    return res.status(200).json({
        service: 'Auth-api',
        status: "up",
        httpStatus: 200,
    })
})


app.listen(PORT, () => {

      console.info(`Server started sucessfully at port ${PORT}`);
});
