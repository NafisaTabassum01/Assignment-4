let interviewList = [];
let rejectionList =[];



let total = document.getElementById('total');
let interviewCount =document.getElementById('interview-count');
let rejectionCount = document.getElementById('rejection-count');


const allBtn= document.getElementById('all-btn');
const interviewBtn= document.getElementById('interview-btn');
const rejectedBtn= document.getElementById('rejected-btn');



const allCardCount = document.getElementById('allcard');
const mainContainer= document.querySelector('main');



function calculateCount(){
total.innerText =allCardCount.children.length;
interviewCount.innerText =interviewList.length;
rejectionCount.innerText =rejectionList.length;



}
calculateCount()


function toggleStyle(id){


allBtn.classList.add('bg-white', 'text-[#64748B]');
interviewBtn.classList.add('bg-white', 'text-[#64748B]');
rejectedBtn.classList.add('bg-white', 'text-[#64748B]');
    

allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');


const selected = document.getElementById(id)


selected.classList.remove('bg-white', 'text-[#64748B]');
selected.classList.add('bg-[#3B82F6]', 'text-white');




}
