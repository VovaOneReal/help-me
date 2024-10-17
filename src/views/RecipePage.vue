<template>
    <div
      class="main-container flex w-[1440px] h-[1024px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[10px] items-center flex-nowrap bg-[#fff] relative overflow-hidden mx-auto my-0"
    >
      <div
        class="flex w-[800px] flex-col gap-[16px] items-start shrink-0 flex-nowrap relative"
      >
        <div
          class="flex gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]"
        >
          <div
            class="flex flex-col gap-[6px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[2]"
          >
            <span
              class="h-[20px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[20px] text-[#0f172a] relative text-left whitespace-nowrap z-[3]"
              >Название рецепта</span
            >
            <div
              class="flex w-[384px] gap-[8px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[4]"
            >
              <div
                class="flex flex-col gap-[6px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[5]"
              >
                <div
                  class="flex pt-[8px] pr-[56px] pb-[8px] pl-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-solid border border-[#cbd5e1] relative box-content z-[6]"
                >
                  <span
                    class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[7]"
                    >Венгерский паштет</span
                  >
                </div>
              </div>
              <input
                class="w-[384px] h-[40px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[8]"
              />
            </div>
          </div>
          <div
            class="flex flex-col gap-[6px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[9]"
          >
            <span
              class="h-[20px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[20px] text-[#0f172a] relative text-left whitespace-nowrap z-10"
              >Категория рецепта</span
            >
            <div
              class="flex w-[384px] gap-[8px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[11]"
            >
              <div
                class="flex flex-col gap-[6px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[12]"
              >
                <div
                  class="flex pt-[8px] pr-[56px] pb-[8px] pl-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-solid border border-[#cbd5e1] relative box-content z-[13]"
                >
                  <span
                    class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#000] relative text-left whitespace-nowrap z-[14]"
                    >Первые блюда</span
                  >
                </div>
              </div>
              <input
                class="w-[384px] h-[40px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[15]"
              />
            </div>
          </div>
        </div>
        <div
          class="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[16]"
        >
          <span
            class="h-[28px] shrink-0 basis-auto font-['Inter'] text-[20px] font-normal leading-[28px] text-[#000] relative text-left whitespace-nowrap z-[17]"
            >Ингредиенты</span
          ><button
            class="flex w-[138px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-solid border border-[#e2e8f0] relative z-[18] pointer"
          >
            <span
              class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[19]"
              >Редактировать</span
            >
          </button>
        </div>
        <div
          class="flex w-[800px] flex-col items-start shrink-0 flex-nowrap relative z-20"
        >
          <div
            class="flex items-start self-stretch shrink-0 flex-nowrap relative z-[21]"
          >
            <div
              class="flex w-[315px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[22]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[23]"
                >Название</span
              >
            </div>
            <div
              class="flex w-[43px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[24]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[25]"
                >Б</span
              >
            </div>
            <div
              class="flex w-[50px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[26]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[27]"
                >Ж</span
              >
            </div>
            <div
              class="flex w-[43px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[28]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[29]"
                >У</span
              >
            </div>
            <div
              class="flex w-[63px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-30"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[31]"
                >Ккл</span
              >
            </div>
            <div
              class="flex w-[89px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[32]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[33]"
                >Кол-во</span
              >
            </div>
            <div
              class="flex w-[76px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[34]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-bold leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[35]"
                >Мера</span
              >
            </div>
          </div>
          <div
            class="flex items-start self-stretch shrink-0 flex-nowrap relative z-[36]"
          >
            <div
              class="flex w-[315px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[37]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[38]"
                >Апельсин</span
              >
            </div>
            <div
              class="flex w-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[39]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-40"
                >1</span
              >
            </div>
            <div
              class="flex w-[56px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[41]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[42]"
                >0,9</span
              >
            </div>
            <div
              class="flex w-[50px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[43]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[44]"
                >16</span
              >
            </div>
            <div
              class="flex w-[60px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[45]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[46]"
                >106</span
              >
            </div>
            <div
              class="flex w-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[47]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[48]"
                >1</span
              >
            </div>
            <div
              class="flex w-[56px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[49]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-50"
                >шт.</span
              >
            </div>
          </div>
          <div
            class="flex items-start self-stretch shrink-0 flex-nowrap relative z-[51]"
          >
            <div
              class="flex w-[315px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[52]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[53]"
                >Апельсин</span
              >
            </div>
            <div
              class="flex w-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[54]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[55]"
                >1</span
              >
            </div>
            <div
              class="flex w-[56px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[56]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[57]"
                >0,9</span
              >
            </div>
            <div
              class="flex w-[50px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[58]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[59]"
                >16</span
              >
            </div>
            <div
              class="flex w-[60px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[60]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[61]"
                >106</span
              >
            </div>
            <div
              class="flex w-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[62]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[63]"
                >1</span
              >
            </div>
            <div
              class="flex w-[56px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[64]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[65]"
                >шт.</span
              >
            </div>
          </div>
          <div
            class="flex items-start self-stretch shrink-0 flex-nowrap relative z-[66]"
          >
            <div
              class="flex w-[315px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[67]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[68]"
                >Апельсин</span
              >
            </div>
            <div
              class="flex w-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[69]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[70]"
                >1</span
              >
            </div>
            <div
              class="flex w-[56px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[71]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[72]"
                >0,9</span
              >
            </div>
            <div
              class="flex w-[50px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[73]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[74]"
                >16</span
              >
            </div>
            <div
              class="flex w-[60px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[75]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[76]"
                >106</span
              >
            </div>
            <div
              class="flex w-[40px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[77]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[78]"
                >1</span
              >
            </div>
            <div
              class="flex w-[56px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[79]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[80]"
                >шт.</span
              >
            </div>
          </div>
          <div
            class="flex items-start self-stretch shrink-0 flex-nowrap relative z-[81]"
          >
            <div
              class="flex w-[315px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[82]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[83]"
                >Всего</span
              >
            </div>
            <div
              class="flex w-[43px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[84]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[85]"
                >3</span
              >
            </div>
            <div
              class="flex w-[65px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[86]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[87]"
                >0,27</span
              >
            </div>
            <div
              class="flex w-[53px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[88]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[89]"
                >48</span
              >
            </div>
            <div
              class="flex w-[70px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[90]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[91]"
                >1600</span
              >
            </div>
            <div
              class="flex w-[48px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[92]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[93]"
                >—</span
              >
            </div>
            <div
              class="flex w-[48px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] border-solid border border-[#e2e8f0] relative z-[94]"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[95]"
                >—</span
              >
            </div>
          </div>
        </div>
        <span
          class="h-[28px] shrink-0 basis-auto font-['Inter'] text-[20px] font-normal leading-[28px] text-[#000] relative text-left whitespace-nowrap z-[96]"
          >Инструкция</span
        >
        <div
          class="flex flex-col gap-[6px] items-start self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[97]"
        >
          <div
            class="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[98]"
          >
            <div
              class="flex pt-[8px] pr-[12px] pb-[8px] pl-[12px] gap-[10px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-solid border border-[#cbd5e1] relative z-[99]"
            >
              <span
                class="flex w-[776px] h-[220px] justify-start items-start grow shrink-0 basis-0 font-['Inter'] text-[14px] font-normal leading-[20px] text-[#000] relative text-left z-[100]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus arcu nec nisi auctor, sit amet tincidunt libero
                ullamcorper. Vivamus sit amet condimentum eros. Aliquam sed libero
                at arcu luctus malesuada id eu ipsum. Ut nec egestas lorem, a
                pulvinar risus. Curabitur non dolor dolor. Donec scelerisque orci
                lorem, sed ornare sem fermentum ut. Integer non ante ullamcorper
                odio scelerisque condimentum.<br />
                Cras condimentum at felis at rutrum. Proin congue semper felis.
                Donec euismod, dui at cursus gravida, augue magna auctor metus, id
                venenatis enim arcu in velit. Maecenas id risus leo. Nunc cursus
                malesuada justo in convallis. Donec mattis mauris ut nulla rutrum
                lacinia. Sed quis neque at lorem scelerisque fermentum nec non
                risus. Aenean ac sagittis ante. Maecenas sagittis sodales mi,
                molestie eleifend quam malesuada vitae. Cras sagittis libero vel
                ligula eleifend viverra. Cras finibus maximus purus at consequat.
                Vivamus non quam fermentum sem sodales imperdiet. Aliquam non
                lacus nec ipsum maximus molestie a vitae dui. Quisque eget lectus
                quis tellus iaculis vehicula.</span
              >
            </div>
          </div>
          <input
            class="w-[800px] h-[236px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[101]"
          />
        </div>
        <div
          class="flex gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[102]"
        >
          <button
            class="flex w-[107px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#ef4444] rounded-[6px] border-none relative z-[103] pointer"
          >
            <span
              class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[104]"
              >Отклонить</span
            >
          </button>
          <div
            class="flex gap-[16px] justify-end items-center grow shrink-0 basis-0 flex-nowrap relative z-[105]"
          >
            <button
              class="flex w-[131px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#0f172a] rounded-[6px] border-none relative z-[106] pointer"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[24px] text-[#fff] relative text-left whitespace-nowrap z-[107]"
                >Опубликовать</span
              ></button
            ><button
              class="flex w-[101px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-solid border border-[#e2e8f0] relative z-[108] pointer"
            >
              <span
                class="h-[24px] shrink-0 basis-auto font-['Inter'] text-[14px] font-medium leading-[24px] text-[#0f172a] relative text-left whitespace-nowrap z-[109]"
                >Отменить</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped></style>
  