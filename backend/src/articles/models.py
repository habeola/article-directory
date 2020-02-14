from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=50)
    Content = models.TextField()
    image = models.ImageField(upload_to='images')
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
