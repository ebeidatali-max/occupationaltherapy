// ==========================================================
// 1. تعريف البيانات لكل جدول (قوائم البنود) - مُحدَّثة
// ==========================================================

const educationItems = [
    "يجلس الطالب في الصف على كرسي وطاولة ملائمين", "يجلس الطالب بالصف على الفرشة", 
    "يستخدم الطالب الايباد الموجود داخل الصف", "يستخدم الطالب البروجكتير داخل الصف"
];
const mobilityItems = [
    "يتنقل مشيا على الاقدام", "يتنقل الطالب زحفا على الأطراف", 
    "يتنقل الطالب بواسطة كرسي متحرك خاص به", "يتنقل الطالب باستخدام الووكر", 
    "ينتقل الطالب من الكرسي المتحرك الي كرسي الصف", "يتنقل الطالب من الكرسي المتحرك الى كرسي الحمام",
    "يتنقل الطالب من الكرسي المتحرك الى تخت الحمام", "يصعد الطالب الدرج",
    "ينزل الطالب الدرج", "يستخدم الطالب المصعد", "يتنقل الطالب داخل مرافق المدرسة"
];
const chairTypeItems = ["كرسي كهربائي", "كرسي مع ملائمات", "كرسي عادي للتنقل", "ووكر", "لا يستخدم كرسي"];
const foodTextureItems = ["عادي", "مطحون خشن", "نصف مطحون", "مطحون ناعم", "PEG"];
const drinkingMethodItems = ["كوب", "قنينة رضاعة", "كأس مع قشة"];

const foodInitialItems = ["يتناول الطالب الطعام بشكل سليم", "يمييز الطالب أدوات الطعام واستخداماتها"];
const foodDetailedItems = [
    "يتوجه الطالب ل طلب الطعام", "يوجه الطالب الطعام نحو فمه", 
    "يتناول الطالب الساندويش", "يتناول الطالب الطعام ب استخدام الملعقة", 
    "يغرف الطالب الطعام باستخدام الملعقة","يضم الطالب شفتيه على الملعقة ويسحب الطعام", 
    "يبقي الطالب الطعام في الفم اثناء المضغ", "يحافظ الطالب على نظافته ونظافة المكان من حوله اثناء الطعام"
];
const bathroomYNItems = ["يلبس الطالب الحفاظ", "يستطيع ان يضبط عملية التبول", "يستطيع ان يضبط عملية الإخراج"];
const bathroomAbilityItems = ["يستطيع الذهاب الى الحمام و استخدامه", "يطلب الذهاب الى الحمام"];
const selfCareItems = [
    "يمييز الطالب قطع الملابس المناسبة", "يلبس الطالب الجوارب", "يخلع الطالب الجوارب", 
    "يلبس الطالب الحذاء", "يخلع الطالب الحذاء", "يغلق و يفتح السكوتش", 
    "يربط رباط الحذاء", "يساعد في عملية اللباس", "يفتح و يغلق السحاب", 
    "يلبس المعطف", "يخلع المعطف", 
    "يغسل الطالب يديه", "يغسل الطالب وجهه", "ينظف الطالب اسنانه", "يمشط الطالب شعره"
];
const motorSkillsItems = [
    "لدى الطالب مدى حركي كامل في الذراع اليمنى AROM", "لدى الطالب مدى حركي كامل في الذراع اليسرى AROM",
    "لدى الطالب مدى حركي كامل في الذراع اليمنى PROM", "لدى الطالب مدى حركي كامل في الذراع اليسرى PROM",
    "لدى الطالب مدى حركي كامل في القدم اليمنى AROM", "لدى الطالب مدى حركي كامل في القدم اليسرى AROM",
    "لدى الطالب مدى حركي كامل في القدم اليمنى PROM", "لدى الطالب مدى حركي كامل في القدم اليسرى PROM",
    "لدى الطالب سيطرة على الرأس والجذع", "يحرك الطالب رأسه نحو اليمين واليسار"
];
const sittingItems = ["يجلس الطالب بدون دعم", "يجلس الطالب مع دعم", "يحافظ على التوازن في عملية الجلوس"];
const standingItems = ["يقف الطالب بدون دعم", "بحاجة الى دعم عند الوقوف", "يحافظ على التوازن اثناء عملية الوقوف", "يلتقط الطالب الأغراض من الأرض"];
const attentionItems = [
    "فترة تركيزه ملائمة للفعالية", "ينفذ الارشادات والاوامر", "يشارك كلاميا",
    "يشارك حركيا بالأنشطة", "ينتظر الدور", "ينهي المهمة المطلوبة منه",
    "مرونة في الانتقال بين الفعاليات"
];
const tableSkillsItems = ["لدى الطالب تتبع بصري", "لدى الطالب تآزر عين يد", "يقطع خط المنتصف", "تآزر يد - يد", "Hand-hand manipulation", "In hand manipulation"];
const cognitiveSkillsItems = [
    "ادراك الاسم والعمر", 
    "ادراك الأشخاص في البيئة المحيطة (الطاقم والزملاء)", 
    "ادراك المكان (البيت او الصف)", 
    "ادراك الزمان (صباح و ليل)",
    "ادراك الألوان الأساسية (احمر-ازرق-اصفر-أخضر)",
    "ادراك الأشكال الأساسية (دائرة-مثلث-مربع)", 
    "تمييز الخطوط (مستقيم-افقي-عمودي-مائل-منحني-متعرج)",
    "العد التلقائي حتى 10", 
    "تركيب بازل (3 سنوات 4-5 قطع, 4 سنوات 9-16 قطعة, 5 سنوات 20-40 قطعة)",
    "يخطط داخل متاهة (اتجاه واحد, عدة اتجاهات)",
    "ثبوتية الشكل", 
    "ذاكرة بصرية",
    "تخطيط حركي"
];
// تحديث: إضافة البنود الجديدة للجانب الحسي
const sensoryItems = [
    "يعطي الطفل ردة فعل عادية للمس-الاحتضان",
    "يعطي الطفل ردة فعل ملائمة عند ملامسة مواد مختلفة",
    "يعطي الطفل ردة فعل ملائمة للأطعمة والروائح",
    "يعطي الطفل ردة فعل ملائمة لقوة الضوء",
    "يتابع الاشياء المتحركة والثابتة وينقل بين مثيرين",
    "يعطي ردة فعل ملائمة للأصوات والضجيج",
    "يلف برأسه ك استجابة عند مناداة اسمه", 
    "قادر على الحفاظ على التواصل البصري مع الاخرين",
    "يشير الى الأشياء التي تثير اهتمامه", "عادة ما يلعب ب الألعاب دون وضعها في فمه",
    "يستمتع باللعب ب الألعاب ذات الملامس المختلفة", "يستمتع باللعب ب الالعاب الموسيقية المختلفة",
    "يستمتع عند استخدام الماء", "قادر على تهدئة نفسه عندما ينزعج",
    "قادر على التهدئة بواسطة الهز واللمس والاصوات المريحة", "يبكي و يهدئ شعوره عند الألم"
];
// جديد: بنود مراحل اللعب
const playStageItems = [
    "اللعب غير المنظم: تحريك الاطراف بشكل عشوائي لاكتشاف الجسد", 
    "اللعب الانفرادي: الانشغال باللعب بمفرده دون الاهتمام بالاخرين",
    "سلوك المراقب: مراقبة الاخرين اثناء اللعب دون المشاركة", 
    "اللعب المتوازي: اللعب بجانب الاخرين دون تفاعل مباشر",
    "اللعب الترابطي: التفاعل مع الاخرين دون تعاون منظم او هدف مشترك", 
    "اللعب التعاوني: المشاركة في لعب منظم بهدف مشترك مع الاخرين"
];

const playSkillsItems = [
    "المبادرة: التعامل مع الأشخاص أو الأدوات.", "التنظيم أو الضبط", "القدرة على دمج الخيال بالواقع",
    "المتعة: إظهار الفرح والحيوية والانخراط في اللعبة", "التبادلية: إظهار اهتمام وانخراط مع الآخر، المشاركة بالمتعة",
    "اللعبية: نشيط، آمن، يظهر حيوية، يواجه تحديات ويتغلب على العقبات", "يشارك بروح مرحة وخيالية",
    "لعب حسي-حركي: استكشاف حسي – حركي للأجسام والبيئة", "اللعب الوظيفي: استخدام الجسم حسب التعليمات",
    "اللعب الرمزي 1: توجيه أفعال على غرض حقيقي (إطعام دمية بالمعلقة)",
    "اللعب الرمزي 2: استخدام غرض مشابه بدلاً من الغرض الحقيقي (كوب لعبة بدل الحقيقي)",
    "اللعب الرمزي 3: استخدام أي غرض كبديل للغرض الحقيقي دون علاقة مباشرة (مكعب كملعقة)",
    "اللعب الرمزي 4: القيام بأفعال تخيلية بدون الحاجة لغرض مادي (التظاهر بالشرب)",
    "اللعب الرمزي 5: عدة أطفال يلعبون أدوارا معاً (طبيب، بائع، عائلة)",
    "ألعاب البناء والتركيب: تركيب وبناء أشياء، ابتكار محتوى جديد",
    "ألعاب بالقوانين: ألعاب جماعية منظمة (دومينو، بطاقات)",
    "ألعاب حركة ورياضة: استخدام أي غرض كبداية للنشاط من غير الاعتماد على الغرض الأصلي"
];

const gripTypes = ["Cylindrical", "Spherical", "Hook", "Pinch", "Tripod", "Lumbrical"];

// ==========================================================
// 2. دالة بناء الجداول (لم تتغير)
// ==========================================================

function buildTable(containerId, items, type) {
    let tableClass = '';
    let tableHTML = '<table><thead><tr><th>البند</th>';

    if (type === 'single-choice-note') {
        tableHTML += '<th>النوع المختار</th><th>ملاحظات</th></tr></thead><tbody>';
        tableClass = 'col-3'; 
    } else if (type === '5-col-yes-no') {
        tableHTML += '<th>يستطيع</th><th>لا يستطيع</th><th>غير ملائم</th><th>ملاحظات</th></tr></thead><tbody>';
        tableClass = 'col-5'; 
    } else if (type === '7-col-independance') {
        tableHTML += '<th>مستقل</th><th>مساعدة جزئية</th><th>مساعدة كاملة</th><th>غير مستقل</th><th>غير ملائم</th><th>ملاحظات</th></tr></thead><tbody>';
        tableClass = 'col-7'; 
    } else if (type === '3-col-yes-no') {
        tableHTML += '<th>نعم</th><th>لا</th><th>ملاحظات</th></tr></thead><tbody>';
        tableClass = 'col-3'; 
    } else if (type === '6-col-sensory') { 
        tableHTML += '<th>استجابة متدنية</th><th>فرط استجابة</th><th>بحث حسي</th><th>رد فعل طبيعي</th><th>غير ملائم</th><th>ملاحظات</th></tr></thead><tbody>';
        tableClass = 'col-6'; 
    }

    items.forEach((item, index) => {
        const rowId = `${containerId}-${index}`;
        tableHTML += `<tr><td data-item-text="${item}">${item}</td>`;

        if (type === 'single-choice-note') {
             tableHTML += `
                <td><input type="radio" name="${containerId}-choice" value="${item}" onchange="saveTemporaryData()"></td>
                <td><textarea id="note-${rowId}" class="note-input" onchange="saveTemporaryData()"></textarea></td>`;
        } else if (type === '5-col-yes-no') {
            tableHTML += `
                <td><input type="radio" name="${rowId}" value="يستطيع" onchange="saveTemporaryData()"></td>
                <td><input type="radio" name="${rowId}" value="لا يستطيع" onchange="saveTemporaryData()"></td>
                <td><input type="radio" name="${rowId}" value="غير ملائم" onchange="saveTemporaryData()"></td>
                <td><textarea id="note-${rowId}" class="note-input" onchange="saveTemporaryData()"></textarea></td>`;
        } else if (type === '7-col-independance') {
            tableHTML += `
                <td><input type="radio" name="${rowId}" value="مستقل" onchange="saveTemporaryData()"></td>
                <td><input type="radio" name="${rowId}" value="مساعدة جزئية" onchange="saveTemporaryData()"></td>
                <td><input type="radio" name="${rowId}" value="مساعدة كاملة" onchange="saveTemporaryData()"></td>
                <td><input type="radio" name="${rowId}" value="غير مستقل" onchange="saveTemporaryData()"></td>
                <td><input type="radio" name="${rowId}" value="غير ملائم" onchange="saveTemporaryData()"></td>
                <td><textarea id="note-${rowId}" class="note-input" onchange="saveTemporaryData()"></textarea></td>`;
        } else if (type === '3-col-yes-no') {
             tableHTML += `
                <td><input type="radio" name="${rowId}" value="نعم" onchange="saveTemporaryData()"></td>
                <td><input type="radio" name="${rowId}" value="لا" onchange="saveTemporaryData()"></td>
                <td><textarea id="note-${rowId}" class="note-input" onchange="saveTemporaryData()"></textarea></td>`;
        } else if (type === '6-col-sensory') { 
             tableHTML += `
                <td><input type="radio" name="${rowId}" value="استجابة متدنية" onchange="saveTemporaryData()"></td>
                <td><input type="radio" name="${rowId}" value="فرط استجابة" onchange="saveTemporaryData()"></td>
                <td><input type="radio" name="${rowId}" value="بحث حسي" onchange="saveTemporaryData()"></td>
                <td><input type="radio" name="${rowId}" value="رد فعل طبيعي" onchange="saveTemporaryData()"></td>
                <td><input type="radio" name="${rowId}" value="غير ملائم" onchange="saveTemporaryData()"></td>
                <td><textarea id="note-${rowId}" class="note-input" onchange="saveTemporaryData()"></textarea></td>`;
        }
        
        tableHTML += '</tr>';
    });

    tableHTML += '</tbody></table>';
    document.getElementById(containerId).innerHTML = tableHTML.replace('<table>', `<table class="${tableClass}">`);
}

function buildGripTable(containerId, gripTypes) {
    let tableHTML = '<table><thead><tr><th>نوع القبضة</th><th>اليد اليمنى</th><th>اليد اليسرى</th></tr></thead><tbody>';

    gripTypes.forEach(grip => {
        const rowId = `grip-${grip}`;
        tableHTML += `
            <tr>
                <td data-item-text="${grip}">${grip}</td>
                <td><input type="checkbox" name="${rowId}-right" value="${grip}-right" onchange="saveTemporaryData()"></td>
                <td><input type="checkbox" name="${rowId}-left" value="${grip}-left" onchange="saveTemporaryData()"></td>
            </tr>
        `;
    });

    tableHTML += '</tbody></table>';
    document.getElementById(containerId).innerHTML = tableHTML.replace('<table>', '<table class="col-3">');
}

// ==========================================================
// 3. دوال بناء الأهداف والتوصيات والملاحظات (لم تتغير)
// ==========================================================

const achievementOptions = [
    { value: "جاري العمل عليه", text: "جاري العمل عليه" },
    { value: "تم إنجازه (مستقل)", text: "تم إنجازه (مستقل)" },
    { value: "إنجاز جزئي", text: "إنجاز جزئي" },
    { value: "غير ملائم حالياً", text: "غير ملائم حالياً" }
];

function createGoalItem(containerId, goalText = '', achievementLevel = achievementOptions[0].value, goalNotes = '') {
    const container = document.getElementById(containerId);
    const goalIndex = container.children.length; 
    const goalUniqueId = `${containerId}-${goalIndex}`;

    const goalItem = document.createElement('div');
    goalItem.className = 'goal-item-container';
    
    const selectHTML = achievementOptions.map(option => 
        `<option value="${option.value}" ${achievementLevel === option.value ? 'selected' : ''}>${option.text}</option>`
    ).join('');

    goalItem.innerHTML = `
        <div class="goal-header">
            <span class="goal-number"></span>
            <textarea rows="2" class="goal-item" id="goal-text-${goalUniqueId}" placeholder="اكتب الهدف هنا..." onchange="saveTemporaryData()">${goalText}</textarea>
            <div class="achievement-level">
                <select id="achieve-${goalUniqueId}" onchange="saveTemporaryData()">
                    ${selectHTML}
                </select>
            </div>
            <button class="delete-goal-btn" onclick="deleteGoal(this)"><i class="fas fa-times-circle"></i></button>
        </div>
        <textarea rows="3" class="goal-notes-area" id="goal-notes-${goalUniqueId}" placeholder="ملاحظات المعالج على هذا الهدف (مثل: طريقة المساعدة، الظروف، إلخ)..." onchange="saveTemporaryData()">${goalNotes}</textarea>
    `;
    
    container.appendChild(goalItem);
    updateGoalNumbering(containerId);
}

function updateGoalNumbering(containerId) {
    const items = document.querySelectorAll(`#${containerId} .goal-item-container`);
    items.forEach((item, index) => {
        item.querySelector('.goal-number').textContent = `${index + 1}.`;
        
        const uniqueId = `${containerId}-${index}`;
        item.querySelector('.goal-item').id = `goal-text-${uniqueId}`;
        item.querySelector('.achievement-level select').id = `achieve-${uniqueId}`;
        item.querySelector('.goal-notes-area').id = `goal-notes-${uniqueId}`;
    });
}

function deleteGoal(button) {
    const container = button.closest('.goal-item-container');
    const containerId = container.closest('div[id$="-goals-container"]').id;
    container.remove();
    updateGoalNumbering(containerId);
    saveTemporaryData(); 
}

function createNoteItem(noteText = '') {
    const container = document.getElementById('therapist-notes-container');
    
    const noteItem = document.createElement('div');
    noteItem.className = 'note-item-container';
    
    noteItem.innerHTML = `
        <span class="note-number"></span>
        <textarea rows="2" class="note-item" placeholder="اكتب الملاحظة هنا..." onchange="saveTemporaryData()">${noteText}</textarea>
        <button class="delete-note-btn" onclick="deleteNote(this)"><i class="fas fa-times-circle"></i></button>
    `;
    
    container.appendChild(noteItem);
    updateNoteNumbering();
}

function deleteNote(button) {
    const container = button.closest('.note-item-container');
    container.remove();
    updateNoteNumbering();
    saveTemporaryData();
}

function updateNoteNumbering() {
    const items = document.querySelectorAll(`#therapist-notes-container .note-item-container`);
    items.forEach((item, index) => {
        item.querySelector('.note-number').textContent = `${index + 1}.`;
    });
}

function createRecommendationItem(recommendationText = '') {
    const container = document.getElementById('recommendations-container');
    
    const recItem = document.createElement('div');
    recItem.className = 'recommendation-item-container';
    
    recItem.innerHTML = `
        <span class="recommendation-number"></span>
        <textarea rows="2" class="recommendation-item" placeholder="اكتب التوصية هنا..." onchange="saveTemporaryData()">${recommendationText}</textarea>
        <button class="delete-recommendation-btn" onclick="deleteRecommendation(this)"><i class="fas fa-times-circle"></i></button>
    `;
    
    container.appendChild(recItem);
    updateRecommendationNumbering();
}

function deleteRecommendation(button) {
    const container = button.closest('.recommendation-item-container');
    container.remove();
    updateRecommendationNumbering();
    saveTemporaryData();
}

function updateRecommendationNumbering() {
    const items = document.querySelectorAll(`#recommendations-container .recommendation-item-container`);
    items.forEach((item, index) => {
        item.querySelector('.recommendation-number').textContent = `${index + 1}.`;
    });
}

// ==========================================================
// 4. وظائف التحميل (Word/PDF) - مُحدَّثة لتنسيق الألوان والجداول
// ==========================================================

function downloadAsPDF() {
    const element = document.getElementById('assessment-container'); 

    const options = {
        margin: [10, 10, 10, 10], 
        filename: 'Occupational_Therapy_Assessment.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: false, dpi: 192, letterRendering: true, height: element.offsetHeight },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    const originalDisplay = element.style.display;
    element.style.display = 'block'; 
    
    html2pdf().set(options).from(element).save().then(() => {
        element.style.display = originalDisplay; 
    });
}

function downloadAsWord() {
    const studentName = document.getElementById('student-name').value || 'غير محدد';
    const filename = `استمارة_تقييم_علاج_وظيفي_${studentName}.doc`;
    
    const primaryColor = '#006400'; // الأخضر الداكن الجديد
    const lightColor = '#F0F0F0'; // الرمادي الفاتح الجديد
    const cellBorderColor = '#444'; // لون حدود موحد للخلايا
    
    const footerElement = document.getElementById('institution-footer');
    const footerHTML = footerElement ? footerElement.outerHTML : ''; 

    
    let wordContent = ''; 
    
    wordContent += `<h1 style="text-align: center; color: ${primaryColor}; margin-top: 20px;">استمارة تقييم علاج وظيفي</h1>`;
    wordContent += `<p style="text-align: center; font-size: 11pt; color: #555;">مدرسة البكرية</p>`;
    wordContent += `<p><strong>اسم الطالب:</strong> ${document.getElementById('student-name').value || 'غير محدد'}</p>`;
    wordContent += `<p><strong>تاريخ التقييم:</strong> ${document.getElementById('assessment-date').value || 'غير محدد'}</p>`;
    wordContent += `<p><strong>اسم المعالج:</strong> ${document.getElementById('therapist-name').value || 'غير محدد'}</p>`;
    wordContent += '<hr style="margin: 20px 0;">';

    // تجميع كل الأقسام
    document.querySelectorAll('section').forEach(section => {
        const titleElement = section.querySelector('h2, h3:first-of-type');
        if (!titleElement) return;

        wordContent += `<h2 style="text-align: center; color: ${primaryColor};">${titleElement.textContent.trim()}</h2>`;
        
        // 1. استخلاص البيانات الأساسية و حقول الملاحظات
        section.querySelectorAll('[data-export-label]:not(div[id$="goals-container"]):not(div[id$="recommendations-container"]):not(div[id$="notes-container"])').forEach(input => {
            const label = input.getAttribute('data-export-label') || input.previousElementSibling?.textContent.trim();
            let value = '';
            
            if (input.tagName === 'TEXTAREA' || input.type === 'text' || input.type === 'date') {
                value = input.value;
            } 

            if (value && value !== 'لم يتم الاختيار' && value !== '') {
                 wordContent += `<p><strong>${label}:</strong></p><div style="border: 1px dashed #ccc; padding: 10px; margin-bottom: 15px; white-space: pre-wrap; background: #f9f9f9;">${value}</div>`;
            }
        });
        
        // 2. استخلاص الجداول التفاعلية 
        section.querySelectorAll('div[id$="-table"]').forEach(tableDiv => {
            const h3Title = tableDiv.previousElementSibling?.tagName === 'H3' ? `<h3 style="text-align: right; color: ${primaryColor};">${tableDiv.previousElementSibling.textContent.trim()}</h3>` : '';
            wordContent += h3Title; 

            const table = tableDiv.querySelector('table');
            if (table) {
                const clonedTable = table.cloneNode(true);
                
                clonedTable.querySelectorAll('tr').forEach(row => {
                    const itemText = row.querySelector('td[data-item-text]')?.textContent.trim();
                    if (!itemText) return;

                    row.querySelectorAll('td').forEach((cell, cellIndex) => {
                        const selectedRadio = cell.querySelector('input[type="radio"]:checked');
                        const checkedCheckboxes = cell.querySelectorAll('input[type="checkbox"]:checked');
                        const noteTextarea = cell.querySelector('textarea');
                        
                        // إزالة الإدخالات الأصلية ووضع القيمة المحددة بدلاً منها
                        cell.innerHTML = ''; 
                        cell.style.textAlign = 'center'; // جعل محتوى الخلايا وسطاً افتراضياً

                        if (selectedRadio) {
                            cell.innerHTML = `<strong>${selectedRadio.value}</strong>`;
                        } else if (checkedCheckboxes.length > 0) {
                            cell.innerHTML = '✅';
                        } else if (noteTextarea) {
                            cell.innerHTML = noteTextarea.value.trim() ? `[ملاحظة]: ${noteTextarea.value.trim()}` : '';
                            cell.style.textAlign = 'right'; // ملاحظات تكون لليمين
                        } else if (cellIndex > 0 && cell.querySelector('input[type="checkbox"]')) {
                            cell.innerHTML = '❌'; 
                        } else if (cellIndex > 0 && cell.querySelector('input[type="radio"]')) {
                            cell.innerHTML = '-'; 
                        } else if (cellIndex === 0) {
                            cell.innerHTML = `<strong>${itemText}</strong>`; // إعادة البند كنص
                            cell.style.textAlign = 'right'; // البند يكون لليمين
                        }
                    });
                });

                // تطبيق أنماط الجدول لملف Word
                clonedTable.style.width = '100%';
                clonedTable.style.borderCollapse = 'collapse';
                clonedTable.style.marginTop = '10px';
                clonedTable.style.fontSize = '10pt';
                clonedTable.querySelectorAll('th').forEach(th => {
                     th.style.backgroundColor = lightColor; // اللون الفاتح (الرمادي)
                     th.style.color = primaryColor;
                     th.style.border = `1px solid ${cellBorderColor}`; // استخدام اللون الموحد للحدود
                     th.style.padding = '8px';
                });
                 clonedTable.querySelectorAll('td').forEach(td => {
                     td.style.border = `1px solid ${cellBorderColor}`; // استخدام اللون الموحد للحدود
                     td.style.padding = '8px';
                });
                
                // تلوين عمود البند (العمود الأول)
                clonedTable.querySelectorAll('tr').forEach(row => {
                    const firstCell = row.querySelector('td:first-child');
                    if (firstCell) {
                         firstCell.style.backgroundColor = '#fcfcfc'; // خلفية بيضاء خفيفة
                    }
                });

                wordContent += clonedTable.outerHTML;
            }
        });

        // 3. استخلاص التلخيصات اليدوية 
        section.querySelectorAll('textarea[id^="summary-"]').forEach(input => {
             if (input.value) {
                 const summaryTitle = input.previousElementSibling.textContent.trim();
                 wordContent += `<p style="font-weight: bold; margin-top: 15px;">${summaryTitle}:</p><div style="border: 1px dashed #ccc; padding: 10px; margin-bottom: 15px; white-space: pre-wrap; background: #f9f9f9;">${input.value}</div>`;
             }
        });
        
        // 4. استخلاص الأهداف (مع مستوى الإنجاز والملاحظات)
        section.querySelectorAll('div[id$="goals-container"]').forEach(containerDiv => {
            const label = containerDiv.getAttribute('data-export-label');
            const goals = [];
            
            containerDiv.querySelectorAll('.goal-item-container').forEach((item, index) => {
                const goalText = item.querySelector('.goal-item').value.trim();
                const achievement = item.querySelector('select').value;
                const goalNotes = item.querySelector('.goal-notes-area').value.trim(); 
                
                if (goalText) {
                    let goalEntry = `<span style="font-weight: bold;">(${index + 1}) ${goalText}</span> - [مستوى الإنجاز: ${achievement}]`;
                    if (goalNotes) {
                         goalEntry += `<br><em>&nbsp;&nbsp;&nbsp;&nbsp;[ملاحظات المعالج]: ${goalNotes}</em>`;
                    }
                    goals.push(goalEntry);
                }
            });

            if (goals.length > 0) {
                wordContent += `<p style="font-weight: bold; margin-top: 15px; color: ${primaryColor};">${label}:</p><ul style="margin-right: 20px; padding: 5px; list-style-type: none;"><li>${goals.join('</li><li>')}</li></ul>`;
            } else if(label) {
                 wordContent += `<p style="color: #777;"><strong>${label}:</strong> لا توجد أهداف مُضافة.</p>`;
            }
        });
        
        // 5. استخلاص ملاحظات المعالج (البنود الجديدة)
        section.querySelectorAll('#therapist-notes-container').forEach(containerDiv => {
             const label = containerDiv.getAttribute('data-export-label');
             const notes = [];
             
             containerDiv.querySelectorAll('.note-item-container').forEach((item, index) => {
                 const noteText = item.querySelector('textarea').value.trim();
                 if (noteText) {
                     notes.push(`<span style="font-weight: bold;">(${index + 1})</span> ${noteText}`);
                 }
             });

             if (notes.length > 0) {
                 wordContent += `<p style="font-weight: bold; margin-top: 15px; color: ${primaryColor};">${label}:</p><ul style="margin-right: 20px; padding: 5px; list-style-type: none;"><li>${notes.join('</li><li>')}</li></ul>`;
             } else if(label) {
                  wordContent += `<p style="color: #777;"><strong>${label}:</strong> لا توجد ملاحظات مُضافة.</p>`;
             }
        });


        // 6. استخلاص التوصيات (البنود)
         section.querySelectorAll('div[id$="recommendations-container"]').forEach(containerDiv => {
            const label = containerDiv.getAttribute('data-export-label');
            const recommendations = [];
            
            containerDiv.querySelectorAll('.recommendation-item-container').forEach((item, index) => {
                const recText = item.querySelector('.recommendation-item').value.trim();
                if (recText) {
                    recommendations.push(`<span style="font-weight: bold;">(${index + 1})</span> ${recText}`);
                }
            });

            if (recommendations.length > 0) {
                wordContent += `<p style="font-weight: bold; margin-top: 15px; color: ${primaryColor};">${label}:</p><ul style="margin-right: 20px; padding: 5px; list-style-type: none;"><li>${recommendations.join('</li><li>')}</li></ul>`;
            } else if(label) {
                 wordContent += `<p style="color: #777;"><strong>${label}:</strong> لا توجد توصيات مُضافة.</p>`;
            }
        });


        wordContent += '<hr style="margin-top: 20px; border: 1px dotted #ccc;">';
    });

    // إعداد الـ Blob للتحميل
    const htmlContent = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' 
        xmlns:w='urn:schemas-microsoft-com:office:word' 
        xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
            <meta charset='utf-8'>
            <title>استمارة تقييم علاج وظيفي</title>
            <style>
                body { font-family: 'Arial', sans-serif; direction: rtl; text-align: right; line-height: 1.6; font-size: 11pt; }
                h1, h2, h3 { color: ${primaryColor}; text-align: right; border-bottom: 2px solid ${lightColor}; padding-bottom: 5px; margin-top: 25px; }
                h1 { text-align: center; }
                table { width: 100%; border-collapse: collapse; margin: 10px 0; table-layout: fixed; font-size: 10pt;}
                th, td { border: 1px solid ${cellBorderColor}; padding: 8px; text-align: center; vertical-align: middle; }
                th { background-color: ${lightColor}; color: ${primaryColor}; font-weight: bold; }
                td:first-child { text-align: right; width: 30%; background-color: #fcfcfc;} 
                p { margin: 5px 0; }
                strong { font-weight: bold; }
                ul { list-style-type: none; margin-right: 20px; padding: 0; margin-bottom: 15px;}
                ul li { margin-bottom: 8px; }
                #institution-footer { text-align: center; margin-top: 30px; padding-top: 15px; border-top: 1px dashed #aaa; display: block; font-size: 10pt; color: #777; }
            </style>
        </head>
        <body>
            ${wordContent}
            ${footerHTML} 
        </body>
        </html>`;

    const file = new Blob([htmlContent], { type: 'application/msword;charset=utf-8' });
    const a = document.createElement("a");
    
    a.href = URL.createObjectURL(file);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    alert('✅ تم بدء تحميل ملف Word. يرجى البحث عن الملف في مجلد التنزيلات على جهازك.');
}

// ==========================================================
// 5. وظائف الحفظ والتحميل المؤقتة (لم تتغير)
// ==========================================================

function saveTemporaryData() {
    const data = {};
    const inputs = document.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
        const key = input.name || input.id; 
        
        if (input.type === 'radio' || input.type === 'checkbox') {
            if (input.checked) {
                if (input.name.includes('-choice')) {
                    data[input.name] = input.value;
                } else {
                    data[key] = input.value;
                }
            } else if (!data[key]) {
                 data[key] = '';
            }
        } else if (input.tagName === 'TEXTAREA') {
            const containerId = input.closest('div[id$="-container"]')?.id;
            
            if (input.classList.contains('goal-item')) {
                if (!data[`${containerId}-text`]) data[`${containerId}-text`] = [];
                data[`${containerId}-text`].push(input.value); 
            } else if (input.classList.contains('goal-notes-area')) {
                if (!data[`${containerId}-notes`]) data[`${containerId}-notes`] = [];
                data[`${containerId}-notes`].push(input.value); 
            } else if (input.classList.contains('recommendation-item') || input.classList.contains('note-item')) {
                if (!data[containerId]) data[containerId] = [];
                data[containerId].push(input.value);
            } else {
                data[key] = input.value;
            }
        } else if (input.tagName === 'SELECT') {
             const parentGoal = input.closest('.goal-item-container');
             if (parentGoal) {
                 const containerId = parentGoal.closest('div[id$="-goals-container"]').id;
                 const goalIndex = Array.from(parentGoal.parentNode.children).indexOf(parentGoal);
                 data[`achieve-${containerId}-${goalIndex}`] = input.value;
             }
        } else {
            data[key] = input.value;
        }
    });
    localStorage.setItem('otAssessmentData', JSON.stringify(data));
    console.log('Data saved successfully!');
}

function loadTemporaryData() {
    const storedData = localStorage.getItem('otAssessmentData');
    if (!storedData) return;

    const data = JSON.parse(storedData);
    const inputs = document.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
        const key = input.name || input.id;
        
        if (input.type === 'radio' || input.type === 'checkbox') {
            if (data[key] === input.value) {
                input.checked = true;
            } else if (input.type === 'radio' && input.name.includes('-choice') && data[input.name] === input.value) {
                input.checked = true;
            }
        } else if (input.tagName !== 'TEXTAREA' && input.tagName !== 'SELECT') {
            if (data[key] !== undefined) {
                input.value = data[key];
            }
        } else if (input.tagName === 'TEXTAREA' && data[key] !== undefined && !input.classList.contains('goal-item') && !input.classList.contains('recommendation-item') && !input.classList.contains('goal-notes-area') && !input.classList.contains('note-item')) {
            // استرجاع الملاحظات والملخصات العادية
             input.value = data[key];
        }
    });

    ['general-goals-container', 'specific-goals-container', 'therapist-notes-container', 'recommendations-container'].forEach(containerId => {
        const container = document.getElementById(containerId);
        if (!container) return; 

        container.innerHTML = ''; 

        if (containerId.includes('goals') && data[`${containerId}-text`] && data[`${containerId}-text`].length > 0) {
            data[`${containerId}-text`].forEach((goalText, index) => {
                const achievementKey = `achieve-${containerId}-${index}`;
                const achievementValue = data[achievementKey] || achievementOptions[0].value;
                const goalNotes = data[`${containerId}-notes`]?.[index] || '';
                createGoalItem(containerId, goalText, achievementValue, goalNotes);
            });
            updateGoalNumbering(containerId);
        } else if (containerId === 'recommendations-container' && data[containerId] && data[containerId].length > 0) {
            data[containerId].forEach(recText => {
                createRecommendationItem(recText);
            });
            updateRecommendationNumbering();
        } else if (containerId === 'therapist-notes-container' && data[containerId] && data[containerId].length > 0) {
            data[containerId].forEach(noteText => {
                createNoteItem(noteText);
            });
            updateNoteNumbering();
        }
    });
}

function clearStoredData() {
    if (confirm('هل أنت متأكد من مسح جميع البيانات المخزنة مؤقتاً؟ هذا الإجراء لا يمكن التراجع عنه.')) {
        localStorage.removeItem('otAssessmentData');
        location.reload(); 
    }
}

// ==========================================================
// 6. تهيئة التطبيق عند التحميل (ربط الأزرار) - مُحدَّثة
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. بناء الجداول الديناميكية
    buildTable('education-environment-table', educationItems, '5-col-yes-no');
    
    // الجداول الجديدة لخيارات الاختيار الفردي
    buildTable('chair-type-table', chairTypeItems, 'single-choice-note');
    buildTable('food-texture-table', foodTextureItems, 'single-choice-note');
    buildTable('drinking-method-table', drinkingMethodItems, 'single-choice-note');

    // بقية الجداول
    buildTable('mobility-table', mobilityItems, '7-col-independance');
    buildTable('food-initial-table', foodInitialItems, '5-col-yes-no');
    buildTable('food-detailed-table', foodDetailedItems, '7-col-independance');
    buildTable('bathroom-yn-table', bathroomYNItems, '3-col-yes-no');
    buildTable('bathroom-ability-table', bathroomAbilityItems, '5-col-yes-no');
    buildTable('self-care-table', selfCareItems, '7-col-independance');
    buildTable('motor-skills-table', motorSkillsItems, '5-col-yes-no');
    buildTable('sitting-table', sittingItems, '5-col-yes-no');
    buildTable('standing-table', standingItems, '5-col-yes-no');
    buildTable('attention-table', attentionItems, '5-col-yes-no');
    buildTable('table-skills-table', tableSkillsItems, '5-col-yes-no');
    buildTable('cognitive-skills-table', cognitiveSkillsItems, '5-col-yes-no');
    
    // الجداول المحدثة/المضافة
    buildTable('sensory-table', sensoryItems, '6-col-sensory'); 
    buildTable('play-stages-table', playStageItems, '5-col-yes-no'); // الجدول الجديد: مراحل اللعب
    buildTable('play-skills-table', playSkillsItems, '5-col-yes-no'); 
    buildGripTable('grip-type-table', gripTypes);

    // 2. ربط وظائف الأزرار والتحميل
    document.getElementById('print-btn').addEventListener('click', () => window.print());
    document.getElementById('save-temp-btn').addEventListener('click', saveTemporaryData);
    document.getElementById('clear-data-btn').addEventListener('click', clearStoredData);
    
    document.getElementById('download-pdf-btn').addEventListener('click', downloadAsPDF);
    document.getElementById('download-word-btn').addEventListener('click', downloadAsWord);

    // 3. ربط وظائف إضافة الأهداف والتوصيات والملاحظات
    document.querySelectorAll('.add-goal-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.currentTarget.getAttribute('data-target');
            const containerId = target === 'general' ? 'general-goals-container' : 'specific-goals-container';
            createGoalItem(containerId);
            saveTemporaryData();
        });
    });
    
    document.querySelector('.add-recommendation-btn').addEventListener('click', () => {
        createRecommendationItem();
        saveTemporaryData();
    });
    
    document.querySelector('.add-note-btn').addEventListener('click', () => {
        createNoteItem();
        saveTemporaryData();
    });
    
    // 4. تحميل البيانات 
    loadTemporaryData();
    
    // 5. ربط حقول الإدخال بالحفظ المؤقت
    document.querySelectorAll('input[type="text"], input[type="date"], textarea[id]').forEach(element => {
        if (!element.classList.contains('goal-item') && !element.classList.contains('recommendation-item') && !element.classList.contains('goal-notes-area') && !element.classList.contains('note-item')) {
            element.addEventListener('change', saveTemporaryData);
        }
    });
});
