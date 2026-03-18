import http.server
import socketserver
PORT = 8080
class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        super().end_headers()
CustomHandler.extensions_map['.wasm'] = 'application/wasm'
with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"\n🚀 Archival Server started! Play at: http://localhost:{PORT}")
    httpd.serve_forever()
