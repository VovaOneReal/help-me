
<template>
    <div class="main-container flex w-[1440px] h-[1024px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[48px] items-start flex-nowrap bg-[#fff] relative overflow-hidden mx-auto my-0">
      <div class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative">
        <span class="h-[36px] shrink-0 basis-auto font-['Inter'] text-[30px] font-semibold leading-[36px] text-[#000] tracking-[-0.22px] relative text-left whitespace-nowrap z-[1]">Здравствуйте, Логин </span>
        <div class="flex w-[237px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[2]">
          <button class="flex w-[145px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#0f172a] rounded-[6px] border-none relative z-[3] pointer">
          <span class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[4]">Искать рецепты</span>
        </button>
        <button class="flex w-[76px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-solid border border-[#e2e8f0] relative z-[5] pointer">
          <span class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[6]">Выйти</span>
        </button>
  
  
  
  
        
      </div>
      </div>
  
  
      <div class="flex flex-col gap-[32px] items-start self-stretch shrink-0 flex-nowrap relative z-[7]">
    <div class="flex w-[1376px] justify-between items-center shrink-0 flex-nowrap relative z-[8]">
      <!-- Заголовок ваши рецепты -->
      <span class="h-[36px] shrink-0 basis-auto font-['Inter'] text-[30px] font-semibold leading-[36px] text-[#000] tracking-[-0.22px] relative text-left whitespace-nowrap z-[9]">Ваши рецепты</span>
      <div class="flex w-[471px] gap-[16px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-10">
        <div class="flex w-[324px] gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[11]">
  
            <!-- Поисковик -->
          <div >
          <Input placeholder="Введите запрос..." />
          </div>
            
            
            
             
         
        </div>
      </div>
    </div>
      </div>
         <!-- Карточка с рецептами -->
      <div>
        <Card />
        
      </div>
      <div class="flex flex-col gap-[32px] items-start self-stretch shrink-0 flex-nowrap relative z-[99]">
        <div class="flex w-[1376px] justify-between items-center shrink-0 flex-nowrap relative z-[100]">
          <span class="h-[36px] shrink-0 basis-auto font-['Inter'] text-[30px] font-semibold leading-[36px] text-[#000] tracking-[-0.22px] relative text-left whitespace-nowrap z-[101]">Ваши коллекции</span>
          <div class="flex w-[445px] gap-[16px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[102]">
            <div class="flex w-[276px] gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[103]">
              
                <Input placeholder="Введите запрос..." />
             
            
            <div class="flex w-[32px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-solid border border-[#e2e8f0] relative z-[107]">
                <div class="w-[16px] h-[16px] shrink-0 bg-[url(../assets/images/5cdbf79b-de06-491d-a414-c3d12e8bcf74.png)] bg-cover bg-no-repeat relative overflow-hidden z-[108]">
  
                </div>
              </div>
            </div>
            <button class="flex w-[153px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#0f172a] rounded-[6px] border-none relative z-[109] pointer"><span class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[110]">Новая коллекция</span></button></div></div><div class="flex gap-[10px] items-start self-stretch shrink-0 flex-wrap relative z-[111]">
              <!-- Завтраки -->
               <BreakfastSection />
               <BreakfastSection />
               <BreakfastSection />
              <BreakfastSection />
              </div>
            </div>
                <div class="flex flex-col gap-[32px] items-start self-stretch shrink-0 flex-nowrap relative z-[164]">
                  <div class="flex w-[1376px] justify-between items-center shrink-0 flex-nowrap relative z-[165]">
                    <span class="h-[36px] shrink-0 basis-auto font-['Inter'] text-[30px] font-semibold leading-[36px] text-[#000] tracking-[-0.22px] relative text-left whitespace-nowrap z-[166]">Планы питания</span>
                    <div class="flex w-[455px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[167]">
                      <div class="flex w-[228px] flex-col gap-[6px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[168]">
                        <div class="flex w-[228px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[169]">
                          <div class="flex w-[228px] flex-col gap-[6px] items-start shrink-0 flex-nowrap relative z-[170]">
                            
                          </div>
                        </div>
                            <Input placeholder="Введите запрос..." />
                          </div>
                            <div class="flex w-[32px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-solid border border-[#e2e8f0] relative z-[174]">
                              <div class="w-[16px] h-[16px] shrink-0 bg-[url(../assets/images/74a16137-7a3f-428c-bc9d-41b2b131890a.png)] bg-cover bg-no-repeat relative overflow-hidden z-[175]">
  
                              </div>
                            </div>
                              <div class="flex w-[32px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-solid border border-[#e2e8f0] relative z-[176]">
                                <div class="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[177]">
                                  <div class="w-[15.333px] h-[14px] bg-[url(../assets/images/928c77a8-5ebe-4f03-8c23-902d53c8baa3.png)] bg-[length:100%_100%] bg-no-repeat relative z-[178] mt-px mr-0 mb-0 ml-[0.33px]">
  
                                  </div>
                                </div>
                              </div>
                                  <button class="flex w-[115px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#0f172a] rounded-[6px] border-none relative z-[179] pointer">
                                    <span class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[180]">Новый план</span>
                                  </button>
                                </div>
                              </div>
                                    <div class="flex gap-[10px] items-start self-stretch shrink-0 flex-wrap relative z-[181]">
                                      
  <!-- План питания -->
                                      <MeelPlan />
                                                </div>
                                              </div>
  
      </div>
      
     
  
  
  
  
  
  
      <!-- <div class="flex w-[32px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-solid border border-[#e2e8f0] relative z-[15]">
            <div class="w-[16px] h-[16px] shrink-0 bg-[url(../assets/images/32c5fb48-c234-4480-bd29-e4bc429252eb.png)] bg-cover bg-no-repeat relative overflow-hidden z-[16]">
  
            </div>
          </div>
  
  
  
  
          <div class="flex w-[32px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-solid border border-[#e2e8f0] relative z-[17]">
            <div class="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[18]">
              <div class="w-[15.333px] h-[14px] bg-[url(../assets/images/7e136d6a-7c87-42ef-b73b-300e236c4918.png)] bg-[length:100%_100%] bg-no-repeat relative z-[19] mt-px mr-0 mb-0 ml-[0.33px]">
  
            </div>
          </div>
          </div>
  
  
    -->
  
  
  </template>
  
  <script setup>
  
 import Card from '@/components/Card.vue';
 import BreakfastSection from '@/components/BreakfastSection.vue';
 import Input from '@/components/ui/input/Input.vue';
 import MeelPlan from '@/components/MeelPlan.vue';

  </script>
  
  <style src='../assets/index.css'></style>