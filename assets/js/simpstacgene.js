// Browser javascript



window.onload = function() {
  console.log('simpstacgene js loaded')
  const its = document.getElementsByClassName('listings-item')

  for (let i = 0; i < its.length; i++) {
    const frm = its[i].getElementsByClassName('paypal_form')[0]
    const dts = its[i].dataset
    frm.addEventListener('click', () => {
      console.log(frm);
      console.log('form ', dts)
      frm.hosted_button_id.value = dts.paypalid
      frm.submit()
    })
  }



  //e[0].addEventListener
  //const f = e[0].getElementsByClassName('form_button')
  //const d =e[0].dataset

  // f[0].addEventListener('click', () => {
  //   console.log('form clicked', d.id)
  // })

  //console.log(f);
}

const form_button = () => {

}
