(() => {
  const DB_NAME = 'toeflTestDB';
  const DB_VER = 1;
  const STORE = 'recordings';

  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VER);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE)) {
          const store = db.createObjectStore(STORE, { keyPath: 'id' });
          store.createIndex('by_test', 'testId', { unique: false });
          store.createIndex('by_test_index', ['testId','index'], { unique: false });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function save(record) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(record);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  async function listByTest(testId) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const idx = tx.objectStore(STORE).index('by_test_index');
      const lower = [testId, Number.MIN_SAFE_INTEGER];
      const upper = [testId, Number.MAX_SAFE_INTEGER];
      const req = idx.getAll(IDBKeyRange.bound(lower, upper));
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  async function clearByTest(testId) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      const store = tx.objectStore(STORE);
      const idx = store.index('by_test');
      const cur = idx.openKeyCursor(IDBKeyRange.only(testId));
      cur.onsuccess = (e) => {
        const c = e.target.result;
        if (c) { store.delete(c.primaryKey); c.continue(); } else { resolve(); }
      };
      cur.onerror = () => reject(cur.error);
    });
  }

  if (navigator.storage && navigator.storage.persist) { navigator.storage.persist(); }

  window.recStore = { save, listByTest, clearByTest };
})();
