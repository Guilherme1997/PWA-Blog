using System.Collections.Generic;
using aula_01.Models;

namespace aula_01.Service
{
    public interface IBlogService
    {
        List<BlogPost> GetLatestPosts();

        List<BlogPost> GetOlderPosts(int olderPost);


        string GetPostText(string link);
    }
}