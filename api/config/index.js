module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "F23U9R80F89CNVV8BH2U-90DJS0J-DF902J90J3FQJ892HQ3R89HQ2398HR289",
    api: process.env.NODE_ENV === "production" ? "https://api.daoraecommerce.com.br" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://daoraecommerce.com.br" : "http://localhost:8000"
};