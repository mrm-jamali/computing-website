// گرفتن دکمه های مربوط به Sign Up و فرم
const signUpButton = document.querySelector('.btn-sign1');
const form = document.getElementById('registerForm');
const successMessage = document.getElementById('successMessage');
const closeButton = document.getElementById('close-btn');

// نشان دادن فرم ثبت نام با کلیک روی دکمه Sign Up
signUpButton.addEventListener('click', () => {
    form.style.display = 'block'; // نمایش فرم ثبت‌نام
});

// بستن فرم با کلیک روی دکمه Close
closeButton.addEventListener('click', () => {
    form.style.display = 'none'; // پنهان کردن فرم
});

// اعتبارسنجی فرم پس از ارسال
form.addEventListener('submit', function (event) {
    event.preventDefault(); // جلوگیری از ارسال فرم به صورت پیش‌فرض
    
    // دریافت مقادیر ورودی
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // اعتبارسنجی ورودی‌ها
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
        alert('All fields are required!');
        return;
    }
    
    // بررسی اینکه پسورد و تایید پسورد یکسان باشند
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // بررسی فرمت ایمیل
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // اگر همه شرایط برقرار باشند، ثبت نام با موفقیت انجام می‌شود
    successMessage.style.display = 'block';
    form.reset(); // پاک کردن فرم
});



// sign in
// گرفتن دکمه مربوط به Sign In و فرم
const signInButton = document.querySelector('.btn-sign2');
const signinForm = document.getElementById('signinForm');
const closeButton2 = document.getElementById('close-btn2');

// نمایش فرم Sign In با کلیک روی دکمه Sign In
signInButton.addEventListener('click', () => {
    signinForm.style.display = 'block'; // نمایش فرم Sign In
});

// بستن فرم با کلیک روی دکمه Close
closeButton2.addEventListener('click', () => {
    signinForm.style.display = 'none'; // پنهان کردن فرم
});
