let interviewList = [];
let rejectionList =[];


let total = document.getElementById('total');
let interviewCount =document.getElementById('interview-count');
let rejectionCount = document.getElementById('rejection-count');
// console.log(total);

const allCardCount = document.getElementById('allcard');

const mainContainer= document.querySelector('main');
// console.log(mainContainer)
const filterSection =document.getElementById('filtered-section')
// interviewList.push()    
///change it........     

const allBtn= document.getElementById('all-btn');
const interviewBtn= document.getElementById('interview-btn');
const rejectedBtn= document.getElementById('rejected-btn');


function calculation(){
    total.innerText = allCardCount.children.length;
    interviewCount.innerText=interviewList.length;
    rejectionCount.innerText=rejectionList.length;
}

calculation();


function toggleStyle(id){
    // console.log("click",id);
   allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
   interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
   rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');


   allBtn.classList.add('bg-white', 'text-[#64748B]');
   interviewBtn.classList.add('bg-white', 'text-[#64748B]');
   rejectedBtn.classList.add('bg-white', 'text-[#64748B]');

//    console.log(id);
   const selected = document.getElementById(id)
//    console.log(selected);
   selected.classList.remove('bg-white', 'text-[#64748B]')
   selected.classList.add('bg-[#3B82F6]','text-white')

if(id=='interview-btn'){
    allCardCount.classList.add('hidden')
    filterSection.classList.remove('hidden')
}


}


mainContainer.addEventListener('click', function(event){
    // console.log(event.target.parentNode.parentNode)
// console.log(event.target.parentNode)
    console.log(event.target.classList.contains('interview-click')) 
    if(event.target.classList.contains('interview-click')){
        
    const parentNode=event.target.parentNode; 

const companyName= parentNode.querySelector('.companyName').innerText
const position= parentNode.querySelector('.position').innerText
const salary= parentNode.querySelector('.salary').innerText
const state= parentNode.querySelector('.state').innerText
const description= parentNode.querySelector('.description').innerText

const cardInfo={
    companyName,
    position,
    salary,
    state,
    description           
}
const companyExist= interviewList.find(item=> item.companyName== cardInfo.companyName);
 parentNode.querySelector('.state').innerText='interview'
if(!companyExist){
    interviewList.push(cardInfo); 
}
reanderIntervier()
}
})


function reanderIntervier(){
    filterSection.innerHTML=''

    for(let interview of interviewList){
        let div = document.createElement('div');
        div.className='Badge bg-white rounded-xl mt-4 p-5'
        div.innerHTML=`
      
       
<h2 class="companyName text-[18px] font-semibold">Mobile First Corp</h2>
<div class="flex justify-between">
    <p class="position text-[16px] text-[#64748B]">React Native Developer</p> 
    <button class="btn bg-none rounded-full h-[32px] w-[32px]"><i class="fa-regular fa-trash-can my-auto opacity-60"></i></button>
</div>

<p class="salary text-[16px] text-[#64748B] mt-5">Remote • Full-time • $130,000 - $175,000</p>
<div class="state bg-[#EEF4FF] text-black text-[14px] font-medium w-[113px] mt-4 mb-3 h-[36px] text-center py-2">NOT APPLIED</div>
<p class="description mb-3 text-[16px] text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
<button class="interview-click btn btn-outline btn-success mr-4 border-2">INTERVIEW</button>
<button class="rejected-click btn btn-outline btn-error border-2">REJECTED</button>
    
    
        `
filterSection.appendChild(div)

    }
}