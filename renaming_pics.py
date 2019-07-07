import os


def rename_pics():
	cwd = os.getcwd()
	path = cwd + '/pics'

	pics = os.listdir(path)
	index = 1
	for pic in pics:
		name = 'pic' + '{:02d}'.format(index) + '.jpg'
		os.rename(os.path.join(path, pic), os.path.join(path, name))
		index += 1


if __name__ == '__main__':
	rename_pics()
	print('renaming pics...')