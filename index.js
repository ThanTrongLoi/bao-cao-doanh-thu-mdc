$(document).ready(function(){

    const input  =$('input')

    const dtDay = $('#dt-day')
    const billDay = $('#bill-day')
    const tbbDay = $('#tbb-day')
    const food = $('#foods')
    const dtMonth = $('#dt-month')
    const dtTarget = $('#dt-target')
    const billMonth = $('#bill-month')
    const tbbMonth = $('#tbb-month')
    const tbbTarget = $('#tbb-target')
    const edelweiss = $('#edelweiss')

    const percentRevenue = $('.percent-dt')
    const percentBill = $('.percent-bill')

    input.on('input',function(){
        $(this).attr("value",$(this).val())

        tbbDay.attr("value",(dtDay.val() / billDay.val()).toFixed(2))

        tbbMonth.attr("value", (dtMonth.val() / billMonth.val()).toFixed(2))

        percentRevenue.html((dtMonth.val()*100 / dtTarget.val()).toFixed(2)+'%')
        percentBill.html((tbbMonth.val()*100 / tbbTarget.val()).toFixed(2)+'%')
    })
})

const successRevenue = () => {
    const dtDay = $('#dt-day')
    const billDay = $('#bill-day')
    const tbbDay = $('#tbb-day')
    const food = $('#foods')
    const dtMonth = $('#dt-month')
    const dtTarget = $('#dt-target')
    const billMonth = $('#bill-month')
    const tbbMonth = $('#tbb-month')
    const tbbTarget = $('#tbb-target')
    const edelweiss = $('#edelweiss')

    let result = {
        dtDay: dtDay.val().trim(),
        billDay: billDay.val().trim(),
        tbbDay: tbbDay.val().trim(),
        food: food.val().trim(),
        dtMonth: dtMonth.val().trim(),
        dtTarget: dtTarget.val().trim(),
        billMonth: billMonth.val().trim(),
        tbbMonth: tbbMonth.val().trim(),
        tbbTarget: tbbTarget.val().trim(),      
        edelweiss: edelweiss.val().trim()
    }

    if(dtDay.val().trim() != "" &&
    billDay.val().trim() != "" &&
    dtMonth.val().trim() != "" &&
    dtTarget.val().trim() != "" &&
    billMonth.val().trim() != "" &&
    tbbTarget.val().trim() != "" &&
    edelweiss.val().trim() != ""){
        let json = JSON.stringify(result)
        localStorage.setItem("data", json)  
    }
}