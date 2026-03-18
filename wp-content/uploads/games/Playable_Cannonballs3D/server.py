import http.server
import socketserver
import os

# Changed port to 8080 to avoid conflicts with your local WordPress!
PORT = 8080 

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    pass

# Forces the server to deliver the physics engine correctly
CustomHandler.extensions_map['.wasm'] = 'application/wasm'
CustomHandler.extensions_map['.json'] = 'application/json'

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"🚀 Server started successfully!")
    print(f"🎮 Play your game at: http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server.")
    httpd.serve_forever()