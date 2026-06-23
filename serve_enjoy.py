import http.server, os, sys
os.chdir('/Users/adrianalmeida/Desktop/Enjoyasianrestaurant')
http.server.SimpleHTTPRequestHandler.extensions_map.update({'.jpg': 'image/jpeg', '.JPG': 'image/jpeg', '.png': 'image/png'})
httpd = http.server.HTTPServer(('', 5050), http.server.SimpleHTTPRequestHandler)
httpd.serve_forever()
