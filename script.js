// JavaScript Data Storage (Only pledges data relevant to this page)
const pledgesData = [
    // 디지털 안전 (Digital Safety)
    { id: 1, text: '모든 정보를 의심하고 비판적으로 바라보기', category: 'safety', sub: '정보 분별력' },
    { id: 2, text: '가짜 뉴스에 속지 않고, 사실을 확인하는 습관 기르기', category: 'safety', sub: '가짜뉴스 판별' },
    { id: 3, text: '정확하고 필요한 정보만 찾아내는 검색 기술 익히기', category: 'safety', sub: '효율적인 검색' },
    { id: 4, text: '다양한 출처를 비교하며 정보의 신뢰도 판단하기', category: 'safety', sub: '정보 신뢰도 확인' },
    { id: 5, text: '자극적이거나 유해한 정보는 호기심에라도 클릭하지 않기', category: 'safety', sub: '유해 콘텐츠 차단' },
    { id: 6, text: '나의 개인정보(이름, 주소, 전화번호 등)를 함부로 올리지 않기', category: 'safety', sub: '개인정보 보호' },
    { id: 7, text: '친구의 개인정보도 내 것처럼 소중히 여기기', category: 'safety', sub: '타인의 개인정보 존중' },
    { id: 8, text: '강력하고 안전한 비밀번호 만들고 주기적으로 바꾸기', category: 'safety', sub: '안전한 비밀번호' },
    { id: 9, text: '출처를 알 수 없는 앱이나 파일은 설치하지 않기 (악성코드 예방)', category: 'safety', sub: '악성코드 예방' },
    { id: 10, text: '공용 컴퓨터 사용 후에는 반드시 로그아웃하기', category: 'safety', sub: '공용 기기 사용 습관' },
    { id: 11, text: '사이버 폭력의 피해자가 되었을 때 용기 있게 알리기', category: 'safety', sub: '사이버 폭력 인지' },
    { id: 12, text: '온라인에서 문제가 발생했을 때 혼자 고민하지 않고 어른에게 도움 요청하기', category: 'safety', sub: '문제 상황 대처' },
    { id: 13, text: '위협적인 메시지를 받으면 증거를 저장하고 어른에게 보여주기', category: 'safety', sub: '증거 수집' },
    { id: 14, text: '스마트폰 사용 중 보행 시 안전을 항상 유의하기 (스몸비 방지)', category: 'safety', sub: '물리적 안전' },
    { id: 15, text: '디지털 기기 충전 및 보관 시 안전 수칙 지키기', category: 'safety', sub: '기기 안전' },
    { id: 16, text: '디지털 기기 사용으로 인한 신체적, 정신적 건강 관리하기', category: 'safety', sub: '건강 관리' },

    // 디지털 공존 (Digital Coexistence)
    { id: 17, text: '악플 대신 선플, 비난 대신 응원 보내기', category: 'coexistence', sub: '선플과 악플' },
    { id: 18, text: '얼굴이 보이지 않아도, 항상 예의 바르게 말하기', category: 'coexistence', sub: '디지털 예절 (네티켓)' },
    { id: 19, text: '나와 다른 의견도 끝까지 듣고 존중하기', category: 'coexistence', sub: '다양성 존중' },
    { id: 20, text: '단톡방에서 친구를 소외시키거나 따돌리지 않기', category: 'coexistence', sub: '따돌림 방지' },
    { id: 21, text: '다른 사람의 글이나 사진을 비웃거나 놀리지 않기', category: 'coexistence', sub: '놀림과 조롱 금지' },
    { id: 22, text: '성별, 인종, 종교 등으로 차별하는 말 하지 않기', category: 'coexistence', sub: '차별적 언어 사용 금지' },
    { id: 23, text: '디지털 세상에서 나와 다른 문화를 이해하고 포용하는 마음 갖기', category: 'coexistence', sub: '문화적 감수성' },
    { id: 24, text: '친구들과 안전하고 즐겁게 소통하기', category: 'coexistence', sub: '건강한 소통' },
    { id: 25, text: '익명 뒤에 숨어 무책임한 말 하지 않기', category: 'coexistence', sub: '책임감 있는 소통' },
    { id: 26, text: '좋은 정보는 친구들과 공유하며 함께 똑똑해지기', category: 'coexistence', sub: '정보 공유' },
    { id: 27, text: '사이버 폭력의 방관자가 되지 않고 적극적으로 돕기', category: 'coexistence', sub: '사이버 폭력 멈추기' },
    { id: 28, text: '욕설이나 비방이 담긴 글은 무시하고 신고하기', category: 'coexistence', sub: '욕설 및 비방 대응' },
    { id: 29, text: '나의 디지털 발자국이 다른 사람에게 미칠 영향을 고려하기', category: 'coexistence', sub: '디지털 발자국과 타인' },
    { id: 30, text: '온라인에서의 내 모습이 곧 \'나\'라는 것을 잊지 않기', category: 'coexistence', sub: '온라인 정체성' },
    { id: 31, text: '디지털 공간에서 타인의 감정을 이해하고 존중하기', category: 'coexistence', sub: '공감 능력' },
    { id: 32, text: '긍정적이고 따뜻한 온라인 커뮤니티 만들기에 동참하기', category: 'coexistence', sub: '긍정적 커뮤니티' },
    { id: 33, text: '친구와 온라인에서 다퉜을 때 지혜롭게 해결하기', category: 'coexistence', sub: '온라인 갈등 해결' },

    // 디지털 책임 (Digital Responsibility)
    { id: 34, text: '온라인에서 정직하고 솔직한 태도 유지하기', category: 'responsibility', sub: '정직성' },
    { id: 35, text: '불법적인 디지털 활동에 절대 참여하지 않기', category: 'responsibility', sub: '준법성' },
    { id: 36, text: '온라인에 올리는 나의 글과 사진에 책임감 가지기', category: 'responsibility', sub: '책임감' },
    { id: 37, text: '디지털 공간에서의 약속과 규칙을 철저히 지키기', category: 'responsibility', sub: '디지털 약속' },
    { id: 38, text: '온라인상의 저작권을 존중하고 무단 복제를 하지 않기', category: 'responsibility', sub: '저작권 존중' },
    { id: 39, text: '디지털 콘텐츠를 소비할 때 생산자의 노력을 존중하기', category: 'responsibility', sub: '창작자 존중' },
    { id: 40, text: '나의 디지털 발자국(온라인 기록)을 신중하게 관리하기', category: 'responsibility', sub: '디지털 발자국 관리' },
    { id: 41, text: '새로운 디지털 도구의 기능을 익혀 유용하게 활용하기', category: 'responsibility', sub: '새로운 기술 학습' },
    { id: 42, text: '디지털 기술의 발전이 우리 삶에 미치는 영향을 탐구하기', category: 'responsibility', sub: '기술과 사회' },
    { id: 43, text: '디지털 학습 도구를 효율적으로 활용하여 학습 능력을 향상시키기', category: 'responsibility', sub: '효율적인 학습' },
    { id: 44, text: '디지털 기기로 새로운 것을 창조하는 데 도전하기', category: 'responsibility', sub: '창의적인 활동' },
    { id: 45, text: '디지털 기술을 사용하여 나눔과 봉사에 참여하는 방법을 고민하기', category: 'responsibility', sub: '사회적 기여' },
    { id: 46, text: '디지털 세상에서 올바른 정보를 공유하고 확산하는 데 기여하기', category: 'responsibility', sub: '선한 영향력' },
    { id: 47, text: '디지털 기술의 긍정적인 면을 찾아내어 적극적으로 활용하기', category: 'responsibility', sub: '긍정적 활용' },
    { id: 48, text: '온라인 학습 자료를 활용하여 자기 주도 학습 능력 키우기', category: 'responsibility', sub: '자기주도 학습' },
    { id: 49, text: '디지털 환경에서 발생하는 문제 해결을 위해 능동적으로 참여하기', category: 'responsibility', sub: '적극적 참여' },
    { id: 50, text: '디지털 기기를 올바르게 사용하여 환경 보호에 동참하기', category: 'responsibility', sub: '환경 보호' }
];

let pledgeChart; // Chart.js instance
let checkedPledgeIds = []; // Array to store IDs of checked pledges

// Function to load checked pledge IDs from localStorage
function loadCheckedPledges() {
    const storedIds = localStorage.getItem('checkedPledgeIds');
    if (storedIds) {
        checkedPledgeIds = JSON.parse(storedIds);
    }
}

// Function to save checked pledge IDs to localStorage
function saveCheckedPledges() {
    localStorage.setItem('checkedPledgeIds', JSON.stringify(checkedPledgeIds));
}

// Initial content display
document.addEventListener('DOMContentLoaded', () => {
    loadCheckedPledges(); // Load saved states on page load
    renderPledges('all'); // Render all pledges on load
    initPledgeChart();    // Initialize the chart
    setupPledgeFilters(); // Setup filter buttons
    setupPledgeSearch();  // Setup search functionality
});

function renderPledges(filterCategory = 'all', searchTerm = '') {
    const pledgesListDiv = document.getElementById('pledgesList');
    pledgesListDiv.innerHTML = ''; // Clear current list

    const filteredPledges = pledgesData.filter(pledge => {
        const matchesCategory = filterCategory === 'all' || pledge.category === filterCategory;
        const matchesSearch = searchTerm === '' || pledge.text.includes(searchTerm) || pledge.sub.includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    const categorizedPledges = filteredPledges.reduce((acc, pledge) => {
        const categoryName = getCategoryDisplayName(pledge.category);
        const subCategory = pledge.sub;
        if (!acc[categoryName]) {
            acc[categoryName] = {};
        }
        if (!acc[categoryName][subCategory]) {
            acc[categoryName][subCategory] = [];
        }
        acc[categoryName][subCategory].push(pledge);
        return acc;
    }, {});

    for (const categoryName in categorizedPledges) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'mb-8';
        categoryDiv.innerHTML = `<h3 class="text-2xl font-bold text-gray-700 mb-4">${categoryName}</h3>`;

        for (const subCategory in categorizedPledges[categoryName]) {
            const subCategoryDiv = document.createElement('div');
            subCategoryDiv.className = 'mb-4 pl-4 border-l-4 border-gray-200';
            subCategoryDiv.innerHTML = `<h4 class="text-xl font-semibold text-gray-600 mb-2">${subCategory}</h4>`;

            const ul = document.createElement('ul');
            ul.className = 'list-disc list-inside text-lg text-gray-700 space-y-2';

            categorizedPledges[categoryName][subCategory].forEach(pledge => {
                const li = document.createElement('li');
                li.className = 'pledge-item'; // Add class for styling checkbox alignment

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'pledge-checkbox';
                checkbox.dataset.pledgeId = pledge.id; // Store pledge ID for easy lookup

                const pledgeTextSpan = document.createElement('span');
                pledgeTextSpan.className = 'pledge-text';
                pledgeTextSpan.textContent = `${pledge.id}. ${pledge.text}`;

                // Set initial checked state and apply class if already checked
                if (checkedPledgeIds.includes(pledge.id)) {
                    checkbox.checked = true;
                    li.classList.add('checked');
                }

                // Add event listener to toggle checked state
                checkbox.addEventListener('change', (event) => {
                    togglePledgeChecked(pledge.id, event.target.checked, li);
                });

                li.appendChild(checkbox);
                li.appendChild(pledgeTextSpan);
                ul.appendChild(li);
            });
            subCategoryDiv.appendChild(ul);
            categoryDiv.appendChild(subCategoryDiv);
        }
        pledgesListDiv.appendChild(categoryDiv);
    }
    updatePledgeChart(filterCategory);
}

// Function to toggle pledge checked state
function togglePledgeChecked(pledgeId, isChecked, listItemElement) {
    if (isChecked) {
        if (!checkedPledgeIds.includes(pledgeId)) {
            checkedPledgeIds.push(pledgeId);
        }
        listItemElement.classList.add('checked');
    } else {
        checkedPledgeIds = checkedPledgeIds.filter(id => id !== pledgeId);
        listItemElement.classList.remove('checked');
    }
    saveCheckedPledges(); // Save updated state to localStorage
}

function getCategoryDisplayName(category) {
    switch (category) {
        case 'safety': return '디지털 안전 (Digital Safety) - 나를 보호하는 방패';
        case 'coexistence': return '디지털 공존 (Digital Coexistence) - 함께 만드는 따뜻한 세상';
        case 'responsibility': return '디지털 책임 (Digital Responsibility) - 세상을 바꾸는 나의 힘';
        default: return '';
    }
}

function initPledgeChart() {
    const ctx = document.getElementById('pledgeChart').getContext('2d');
    const categoryCounts = {
        safety: pledgesData.filter(p => p.category === 'safety').length,
        coexistence: pledgesData.filter(p => p.category === 'coexistence').length,
        responsibility: pledgesData.filter(p => p.category === 'responsibility').length
    };

    pledgeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['디지털 안전', '디지털 공존', '디지털 책임'],
            datasets: [{
                data: [categoryCounts.safety, categoryCounts.coexistence, categoryCounts.responsibility],
                // 디지털 플레이그라운드 팔레트 색상
                backgroundColor: ['#3B82F6', '#EC4899', '#F59E0B'], // 밝은 파랑, 플레이풀 핑크, 활기찬 노랑/오렌지
                borderColor: '#FFFFFF', // 흰색 테두리
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            size: 14
                        },
                        boxWidth: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed;
                            }
                            return label + '개'; // Append '개' for count
                        }
                    }
                }
            }
        }
    });
}

function updatePledgeChart(filterCategory) {
    if (!pledgeChart) return;

    let filteredCounts;
    if (filterCategory === 'all') {
        filteredCounts = {
            safety: pledgesData.filter(p => p.category === 'safety').length,
            coexistence: pledgesData.filter(p => p.category === 'coexistence').length,
            responsibility: pledgesData.filter(p => p.category === 'responsibility').length
        };
    } else {
        filteredCounts = {
            safety: 0,
            coexistence: 0,
            responsibility: 0
        };
        if (filterCategory === 'safety') filteredCounts.safety = pledgesData.filter(p => p.category === 'safety').length;
        if (filterCategory === 'coexistence') filteredCounts.coexistence = pledgesData.filter(p => p.category === 'coexistence').length;
        if (filterCategory === 'responsibility') filteredCounts.responsibility = pledgesData.filter(p => p.category === 'responsibility').length;
    }

    pledgeChart.data.datasets[0].data = [
        filteredCounts.safety,
        filteredCounts.coexistence,
        filteredCounts.responsibility
    ];
    // 디지털 플레이그라운드 색상을 고정하여 항상 밝은 파랑/핑크/노랑으로 보이게 합니다.
    pledgeChart.data.datasets[0].backgroundColor = ['#3B82F6', '#EC4899', '#F59E0B'];
    pledgeChart.update();
}

function setupPledgeFilters() {
    const filterButtons = document.querySelectorAll('.btn-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.dataset.filter;
            renderPledges(filter, document.getElementById('searchPledge').value);
        });
    });
    // Activate 'ALL 🌈' by default
    document.querySelector('.btn-filter[data-filter="all"]').classList.add('active');
}

function setupPledgeSearch() {
    const searchInput = document.getElementById('searchPledge');
    let debounceTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            const currentFilter = document.querySelector('.btn-filter.active').dataset.filter;
            renderPledges(currentFilter, searchInput.value);
        }, 300); // Debounce to prevent excessive renders
    });
}