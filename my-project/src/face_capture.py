import cv2
import os

face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

cap = cv2.VideoCapture(0)
count = 0
student_name = "student1"

if not os.path.exists(f"dataset/{student_name}"):
    os.makedirs(f"dataset/{student_name}")

while True:
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)

    for (x, y, w, h) in faces:
        face = frame[y:y + h, x:x + w]
        count += 1
        cv2.imwrite(f"dataset/{student_name}/{count}.jpg", face)

    cv2.imshow('Face Capture', frame)

    if count >= 100:
        break

cap.release()
cv2.destroyAllWindows()
