
اكتب الامر في سطر الاوامر
docker-compose up

للاغلاق
اضغط
ctrl+c

ثم قم بالدخول عبر المتصفح

http://localhost:3000

لتسجيل زائر في قاعدة البيانات
اكتب في المتصفح
http://localhost:3000?username=mohamed


للاطلاع على قاعدة البيانات بشكل مباشر
قم بزيارة
http://localhost:8080/?pgsql=postgres-db
وقم بادخال المعلومات ادناه
النظام:postgres
الخادم:postgres-db
اسم المستخدم: postgres
كلمة المرور: mysecretpassword
قاعدة بيانات: course


لتنظيف الدوكر تماماً من الملفات بعد الانتهاء استخدم الامر ادناه
(اختياري)
docker system prune -a 