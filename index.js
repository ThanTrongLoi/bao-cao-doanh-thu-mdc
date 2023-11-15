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

    $('form').submit(function(e){
        e.preventDefault()
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


    $('.popup').css("display","block")
    console.log(dtDay.val().toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))
    $('#dtday').html(dtDay.val().toString().replace(/\B(?=(\d{3})+(?!\d))/g,","));
    $('#billday').html(billDay.val())
    $('#tbbday').html((dtDay.val() / billDay.val()).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))
    $('#thucan').html(food.val())
    $('#dtthang').html(dtMonth.val().toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))
    $('#dttarget').html(dtTarget.val().toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))
    $('#perRe').html((dtMonth.val()*100 / dtTarget.val()).toFixed(2))
    $('#billthang').html(billMonth.val())
    $('#tbbthang').html(tbbMonth.val().toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))
    $('#billtarget').html(tbbTarget.val().toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))
    $('#perBill').html((tbbMonth.val()*100 / tbbTarget.val()).toFixed(2))
    $('#biathap').html(edelweiss.val())
}