const p1 = Promise.resolve(10)
const p2 = Promise.resolve(20)
const p3 = Promise.resolve(30)


export default async function PromisePage() {
   Promise.all([p1, p2, p3])
  .then(result => {
    console.log(result)
  })
  return(
    <div>
       <h1>promise testing</h1>
    </div>
  )

}