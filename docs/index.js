/*
(c) 2022 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

window.addEventListener("load", function () {
  const btnOpen = document.createElement("button");
  btnOpen.innerHTML = "Open Script";
  btnOpen.addEventListener("click", function () {
    const inpFile = document.createElement("input");
    inpFile.type = "file";
    inpFile.addEventListener("input", function () {
      const script = document.createElement("script");
      script.src = URL.createObjectURL(inpFile.files[0]);
      inpFile.remove();
      btnOpen.remove();
      document.body.appendChild(script);
    });
    document.body.appendChild(inpFile);
    inpFile.click();
  });
  document.body.appendChild(btnOpen);
});
