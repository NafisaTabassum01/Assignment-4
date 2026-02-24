let interviewList = [];
let rejectionList =[];
let currentStatus ='all'



let total = document.getElementById('total');
let interviewCount =document.getElementById('interview-count');
let rejectionCount = document.getElementById('rejection-count');


const allBtn= document.getElementById('all-btn');
const interviewBtn= document.getElementById('interview-btn');
const rejectedBtn= document.getElementById('rejected-btn');



const allCardCount = document.getElementById('allcard');
const mainContainer= document.querySelector('main');
const filteredSection =document.getElementById('filtered-section')
const jobsImage = document.getElementById('jobs-image');


function calculateCount(){
total.innerText =allCardCount.children.length;
interviewCount.innerText =interviewList.length;
rejectionCount.innerText =rejectionList.length;



}

function toggleStyle(id){


allBtn.classList.add('bg-white', 'text-[#64748B]');
interviewBtn.classList.add('bg-white', 'text-[#64748B]');
rejectedBtn.classList.add('bg-white', 'text-[#64748B]');
    

allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');


const selected = document.getElementById(id)
currentStatus = id

selected.classList.remove('bg-white', 'text-[#64748B]');
selected.classList.add('bg-[#3B82F6]', 'text-white');

if(id == 'interview-btn'){
    allCardCount.classList.add('hidden');
    filteredSection.classList.remove('hidden')
    renderInterview();
}
else if(id== 'all-btn'){
    allCardCount.classList.remove('hidden')
    filteredSection.classList.add('hidden')

}else if(id == 'rejected-btn'){
        allCardCount.classList.add('hidden');
    filteredSection.classList.remove('hidden')
    renderrejection()
}
  



}

mainContainer.addEventListener('click',function(event){
    
if(event.target.classList.contains('interview-click')){
    const parentNode=event.target.parentNode

const companyName= parentNode.querySelector('.companyName').innerText
const position= parentNode.querySelector('.position').innerText
const salary= parentNode.querySelector('.salary').innerText
const state= parentNode.querySelector('.state').innerText
const description= parentNode.querySelector('.description').innerText
   parentNode.querySelector('.state').innerText= 'Interview'

const cardInfo={
    companyName,
    position,
    salary,
    state:'Interview',
    description           
}

   const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName)


   if(!companyExist){
    interviewList.push(cardInfo)
   }

   rejectionList= rejectionList.filter(item=> item.companyName != cardInfo.companyName)
   calculateCount()
     if(currentStatus == 'rejected-btn')
        renderrejection();

//    renderInterview()

}
 else if(event.target.classList.contains('rejected-click')){
    const parentNode=event.target.parentNode

const companyName= parentNode.querySelector('.companyName').innerText
const position= parentNode.querySelector('.position').innerText
const salary= parentNode.querySelector('.salary').innerText
const state= parentNode.querySelector('.state').innerText
const description= parentNode.querySelector('.description').innerText
   parentNode.querySelector('.state').innerText= 'Rejected'

const cardInfo={
    companyName,
    position,
    salary,
    state:'Rejected',
    description           
}

   const companyExist = rejectionList.find(item=> item.companyName == cardInfo.companyName)


   if(!companyExist){
    rejectionList.push(cardInfo)
   }

      interviewList= interviewList.filter(item=> item.companyName != cardInfo.companyName)



   calculateCount()

}
   
})


function renderInterview(){
  
    filteredSection.innerHTML =''

if(interviewList.length === 0){
        jobsImage.classList.remove('hidden');
        filteredSection.appendChild(jobsImage);
        return;
    }

    jobsImage.classList.add('hidden');



    for(let interview of interviewList){

        // console.log(interview)
        let div= document.createElement('div')
        div.className ='Badge bg-white rounded-xl mt-4 p-5'
        div.innerHTML = `
        <h2 class="companyName text-[18px] font-semibold">${interview.companyName}</h2>
<div class="flex justify-between">
    <p class="position text-[16px] text-[#64748B]">${interview.position}</p> 
    <button class="btn bg-none rounded-full h-[32px] w-[32px]"><i class="fa-regular fa-trash-can my-auto opacity-60"></i></button>
</div>

<p class="salary text-[16px] text-[#64748B] mt-5">${interview.salary}</p>
<div class="state bg-[#EEF4FF] text-black text-[14px] font-medium w-[113px] mt-4 mb-3 h-[36px] text-center py-2">${interview.state}</div>
<p class="description mb-3 text-[16px] text-[#323B49]">${interview.description}</p>
<button class="interview-click btn btn-outline btn-success mr-4 border-2">INTERVIEW</button>
<button class="rejected-click btn btn-outline btn-error border-2">REJECTED</button>

        `
    filteredSection.appendChild(div)
    
    }

}


function renderrejection(){
  
    filteredSection.innerHTML =''

    if(rejectionList.length === 0){
        jobsImage.classList.remove('hidden');
        filteredSection.appendChild(jobsImage);
        return;
    }

    jobsImage.classList.add('hidden');

    
    for(let rejection of rejectionList){

        // console.log(rejection)
        let div= document.createElement('div')
        div.className ='Badge bg-white rounded-xl mt-4 p-5'
        div.innerHTML = `
        <h2 class="companyName text-[18px] font-semibold">${rejection.companyName}</h2>
<div class="flex justify-between">
    <p class="position text-[16px] text-[#64748B]">${rejection.position}</p> 
    <button class="btn bg-none rounded-full h-[32px] w-[32px]"><i class="fa-regular fa-trash-can my-auto opacity-60"></i></button>
</div>

<p class="salary text-[16px] text-[#64748B] mt-5">${rejection.salary}</p>
<div class="state bg-[#EEF4FF] text-black text-[14px] font-medium w-[113px] mt-4 mb-3 h-[36px] text-center py-2">${rejection.state}</div>
<p class="description mb-3 text-[16px] text-[#323B49]">${rejection.description}</p>
<button class="interview-click btn btn-outline btn-success mr-4 border-2">INTERVIEW</button>
<button class="rejected-click btn btn-outline btn-error border-2">REJECTED</button>

        `
    filteredSection.appendChild(div)
    
    }

}


const deleteBtns = document.querySelectorAll('.delete');

deleteBtns.forEach(function(btn){

    btn.addEventListener('click', function(){

        
        const card = this.parentElement.parentElement;

        const company = card.querySelector('.companyName').innerText;

        interviewList = interviewList.filter(function(item){
            return item.companyName !== company;
        });

        rejectionList = rejectionList.filter(function(item){
            return item.companyName !== company;
        });

        card.remove();

        total.innerText = document.querySelectorAll('#allcard > div').length;
        interviewCount.innerText = interviewList.length;
        rejectionCount.innerText = rejectionList.length;

        document.querySelector('.job-count').innerText =
            document.querySelectorAll('#allcard > div').length;

    });

});