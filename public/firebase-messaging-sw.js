importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCdvvJcViTZWv8XcXAcYseXjZnw_baFJMM",
  authDomain: "neohelth-f9e9d.firebaseapp.com",
  projectId: "neohelth-f9e9d",
  storageBucket: "neohelth-f9e9d.appspot.com", // ✅ FIXED
  messagingSenderId: "494629819602",
  appId: "1:494629819602:web:5764cf4c9174517606890b"
});

const messaging = firebase.messaging();

/**
 * 🔔 BACKGROUND MESSAGE
 */
messaging.onBackgroundMessage((payload) => {
  console.log("🔔 Background push:", payload);
  
  self.registration.showNotification(
    payload.notification?.title || "New Notification",
    {
      body: payload.notification?.body || "",
      icon: "/logo.png",               // optional
      data: payload.data,              // 🔥 MOST IMPORTANT
      requireInteraction: true,        // stays until clicked
      vibrate: [200, 100, 200],         // mobile support
    }
  );
  console.log("🔔 Background push after:", payload);
});

/**
 * 🖱️ NOTIFICATION CLICK
 */
self.addEventListener("notificationclick", function (event) {
  event.notification.close();

  const data = event.notification.data || {};
  let url = "/dashboard";

  if (data.type === "chat" && data.conversationId) {
    url = `/chat/${data.conversationId}`;
  }

  if (data.type === "call" && data.fromUserId) {
    url = `/incoming-call/${data.fromUserId}`;
  }

  event.waitUntil(
    clients.matchAll({
      type: "window",
      includeUncontrolled: true,
    }).then((clientList) => {
      for (const client of clientList) {
        if ("focus" in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      return clients.openWindow(url);
    })
  );
});
