import Router,{urlencoded, json} from 'express';
const router = Router();

router.get('/',(req,res)=>{
   res.json({home:'this is home'});
})

router.get('/req.params-:key1-:key2', (req,res)=>{
   res.json({
      "req.headers" : req.headers,
      "req.method" : req.method,
      "req.url" : req.url,
      "req.params": req.params
   })
});

router.get('/req.query',(req,res)=>{ //use for testign http://localhost:8080/req.query?foo=bar&abc=xyz&abc=123
   res.json(req.query);
})

router.post('/req.body',urlencoded({extended:false}),(req,res)=>{
   res.json(req.body);
})

router.get('/others',(req,res)=>{
   res.json({
      "req.headers" : req.headers,
      "req.method" : req.method,
      "req.url" : req.url
   })
})



export default router;