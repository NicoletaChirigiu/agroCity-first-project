import userData from "./employeeData.js";


const renderModalBox = () => {
    let showModalBox = userData.reduce((acc, curentValue) => {
        return (
            acc +
            `
            <span class="close" id="close-modal-box-btn">&times;</span>

            <div class="flex flex-wrap">
              <div class="wrapper md:flex">
                <div class="w-full md:w-1/2">
                 
                <p> ${curentValue.description}</p> 
     <img src="${curentValue.avatar}" alt="user picture" class="rounded-full"/>
                 
                </div>
                <div class="w-full md:w-1/2">
                  <div class="user-name text-center font-semibold text-5xl">
                    ${curentValue.name}
                  </div>
                  <div class="flex justify-evenly w-full m-1">
                    <button class="btn btn-blue m-1" id="hardSkilsBtn">
                      Hard Skils
                    </button>
                    <button class="btn btn-blue m-1" id="softSkilsBtn">
                      Soft Skils
                    </button>
                  </div>
                  <div class="relative p-3 hidden" id="softSkils">
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-pink-200"
                    >
                      <div
                        style="width: 30%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                      >
                      ${curentValue.skils.softSkils.skil1}
                                              </div>
                    </div>
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-red-200"
                    >
                      <div
                        style="width: 50%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      >
                      ${curentValue.skils.softSkils.skil2}
                      </div>
                    </div>
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-blue-200"
                    >
                      <div
                        style="width: 80%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      >
                      ${curentValue.skils.softSkils.skil3}
                      </div>
                    </div>
                  </div>
                  <!-- hard skils -->
                  <div class="relative p-3 hidden" id="hardSkils">
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-pink-200"
                    >
                      <div
                        style="width: 30%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                      >
                      ${curentValue.skils.hardSkils.skil1}
                      </div>
                    </div>
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-red-200"
                    >
                      <div
                        style="width: 50%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      >
                      ${curentValue.skils.hardSkils.skil2}
                      </div>
                    </div>
                    <div
                      class="overflow-hidden h-3 mb-4 text-xs flex rounded bg-blue-200"
                    >
                      <div
                        style="width: 80%;"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      >
                        ${curentValue.skils.hardSkils.skil3}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-evenly">
              <a href="${curentValue.links.git}" class="hover:text-red-800">Git</a>
              <a href="${curentValue.links.linkedin}" class="hover:text-red-800">Linkedin</a>
              <a href="${curentValue.links.facebook}" class="hover:text-red-800">Facebook</a>
            </div>
            `
        );
    }, " ");
    userMainInfos.innerHTML = showModalBox;
}


console.log(userData.hardSkils.skil1);




export default renderModalBox;
