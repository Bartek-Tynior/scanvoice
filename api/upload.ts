export async function uploadInvoice(imageUri: string) {
  const formData = new FormData();
  formData.append("file", {
    uri: imageUri,
    name: "invoice.jpg",
    type: "image/jpeg",
  } as any);

  const res = await fetch(
    "https://fdf15faa1580.ngrok-free.app/api/invoice/upload",
    {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    }
  );

  if (!res.ok) throw new Error("Upload failed");
  return await res.json();
}
