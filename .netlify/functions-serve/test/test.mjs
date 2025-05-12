
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/test.mjs
var WEATHER_URL = `http://api.weatherstack.com/current?access_key=f2230de878326372f271f23aa5476315&query=New-York`;
async function handler(event, context) {
  try {
    const res = await fetch(WEATHER_URL);
    const data = await res.json();
    console.log(data, " <-- DATA");
    return new Response(
      JSON.stringify({
        message: "TEST",
        weather: data
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (err) {
    console.error("weather handler error", err);
    return new Response({
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: err.message })
    });
  }
}
export {
  handler as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvdGVzdC5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIG5ldGxpZnkvZnVuY3Rpb25zL3dlYXRoZXIuanNcbmNvbnN0IFdFQVRIRVJfVVJMID0gYGh0dHA6Ly9hcGkud2VhdGhlcnN0YWNrLmNvbS9jdXJyZW50P2FjY2Vzc19rZXk9ZjIyMzBkZTg3ODMyNjM3MmYyNzFmMjNhYTU0NzYzMTUmcXVlcnk9TmV3LVlvcmtgO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFdFQVRIRVJfVVJMKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIC8vIEFsd2F5cyBKU09OLnN0cmluZ2lmeSgpIHlvdXIgb2JqZWN0XG4gICAgY29uc29sZS5sb2coZGF0YSwgXCIgPC0tIERBVEFcIik7XG4vLyBUSElTIHdpbGwgbWFrZSB0aGUgY2xpZW50IHNlZSBcIltvYmplY3QgT2JqZWN0XVwiXG5yZXR1cm4gbmV3IFJlc3BvbnNlKFxuICBKU09OLnN0cmluZ2lmeSh7XG4gICAgbWVzc2FnZTogXCJURVNUXCIsXG4gICAgd2VhdGhlcjogZGF0YSxcbiAgfSksXG4gIHtcbiAgICBzdGF0dXM6IDIwMCxcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gIH1cbik7XG4gICAgLy8gcmV0dXJuIG5ldyBSZXNwb25zZSh7XG4gICAgLy8gICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgLy8gICBoZWFkZXJzOiB7XG4gICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAvLyAgICAgbWVzc2FnZTogXCJURVNUXCIsXG4gICAgLy8gICAgIHdlYXRoZXI6IGRhdGEsXG4gICAgLy8gICB9KSxcbiAgICAvLyB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIndlYXRoZXIgaGFuZGxlciBlcnJvclwiLCBlcnIpO1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2Uoe1xuICAgICAgc3RhdHVzQ29kZTogNTAwLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSksXG4gICAgfSk7XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFDQSxJQUFNLGNBQWM7QUFFcEIsZUFBTyxRQUErQixPQUFPLFNBQVM7QUFFcEQsTUFBSTtBQUNGLFVBQU0sTUFBTSxNQUFNLE1BQU0sV0FBVztBQUNuQyxVQUFNLE9BQU8sTUFBTSxJQUFJLEtBQUs7QUFHNUIsWUFBUSxJQUFJLE1BQU0sV0FBVztBQUVqQyxXQUFPLElBQUk7QUFBQSxNQUNULEtBQUssVUFBVTtBQUFBLFFBQ2IsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1gsQ0FBQztBQUFBLE1BQ0Q7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLFNBQVMsRUFBRSxnQkFBZ0IsbUJBQW1CO0FBQUEsTUFDaEQ7QUFBQSxJQUNGO0FBQUEsRUFXRSxTQUFTLEtBQUs7QUFDWixZQUFRLE1BQU0seUJBQXlCLEdBQUc7QUFDMUMsV0FBTyxJQUFJLFNBQVM7QUFBQSxNQUNsQixZQUFZO0FBQUEsTUFDWixTQUFTLEVBQUUsZ0JBQWdCLG1CQUFtQjtBQUFBLE1BQzlDLE1BQU0sS0FBSyxVQUFVLEVBQUUsT0FBTyxJQUFJLFFBQVEsQ0FBQztBQUFBLElBQzdDLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
