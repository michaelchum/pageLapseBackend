import popen2

# p = subprocess.Popen(["jekyll", "serve", "-s", "tmp/mchacks"], stdout=subprocess.PIPE)

r, w, e = popen2.popen3("jekyll serve -s tmp/mchacks")

r.readlines()
e.readlines()


# print p.communicate()


