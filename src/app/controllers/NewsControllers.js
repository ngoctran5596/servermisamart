import { Production } from '../../model/Production.js'

class NewsControllers {

  //[GET]/news
  async index(req, res, next) {
    await Production.find({})
      .then((product) => {
        //map qua de bien thang nay thanh object thuong con contructor no khong doc duoc
        res.json(product)
      })
      .catch(next)

  }

  //[GET]/news/:slug
  slug(req, res) {
    res.send('new detail')
  }
  //[GET]/
  create(req, res) {
    res.render('production/create')
  }

  //[POST]/news
  addProduction(req, res) {
    if (req.file) {
      const data = req.body
      let image = process.env.IMAGE_URL + req.file.filename;
      const product = new Production(data)
      product
        .save()
        .then(() => res.json(product))
        .catch((err) => {
          console.log("ERROR: ", err)
        })
    }else{
      const data = req.body
      const product = new Production(data)
      product
        .save()
        .then(() =>res.json(product))
        .catch((err) => {
          console.log("ERROR: ", err)
        })
    }
    // console.log(req.file)

    // const data = {
    //   name: 'Son lalabe',
    //   price: 23,
    //   description: 'Nhap tu au my'
    // }
    // const product = new Production(data)
    // product
    //   .save()
    //   .then(() => res.redirect("/"))
    //   .catch((err) => {
    //     console.log("ERR", err)
    //   })
  }
}


export const productControllers = new NewsControllers;



