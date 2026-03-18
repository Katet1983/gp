import http.server
import socketserver

PORT = 8080

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    pass

CustomHandler.extensions_map['.wasm'] = 'application/wasm'
CustomHandler.extensions_map['.json'] = 'application/json'

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"\n🚀 Server started! Play at: http://localhost:{PORT}")
    httpd.serve_forever()
