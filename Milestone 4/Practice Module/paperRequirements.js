function paperRequirements(bookPage1,bookPage2,bookPage3)
{
    console.log(`প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ${bookPage1} টা `);
    console.log(`সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ${bookPage2} টা `);
    console.log(`তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ${bookPage3} টা `);
    console.log(`মোট পৃষ্ঠা লাগবে : ${bookPage1+bookPage2+bookPage3}`);
    // let result = `মোট পৃষ্ঠা লাগবে : ${bookPage1+bookPage2+bookPage3}`;
    // return result;
}
paperRequirements(100,100,100);