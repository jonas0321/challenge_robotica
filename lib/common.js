export const createPointer = (objectId, className) => {
  const ClassName = Parse.Object.extend(className);
  const pointer = new ClassName();
  pointer.id = objectId;
  return pointer;
};
