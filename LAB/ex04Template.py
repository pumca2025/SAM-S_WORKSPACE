class AIModels:
    def __init__(self,name,developer,version,pros,cons):
        self.name=name
        self.developer=developer
        self.version=version
        self.pros=pros
        self.cons=cons
    def display(self):
        print(f"AI MODEL  : { self.name }")
        print(f"Developer : { self.developer }")
        print(f"Version   : { self.version }")
        print(f"pros      : { self.pros }")
        print(f"cons      : { self.cons } ")
        return ""
chatgpt=AIModels("ChatGpt","Sam Altman","GPT 5","used in education, programming, business, creative writing, customer support, language translation, research, and productivity tasks.","ChatGPT has limitations like providing incorrect info, lack of real-time updates, over-reliance risk, limited reasoning, no personal experiences, and possible bias in answers.")
gemini=AIModels("Gemini","Google Deepmind","Gemini 1.5","Powerful multimodal AI with Google integration, large context handling, and real-time web access","Can be inaccurate, costly, privacy-limited, and less flexible outside Google’s ecosystem.")
claude=AIModels("Claude","Antropie","Claude 3.5","Ethically aligned with strong safety-focused design, excels at handling long context, structured reasoning, summarization, coding, and professional writing","Lacks real-time web access and multimodal features, can be overly cautious and limited in creative flexibility, less integrated in third-party ecosystems, and may suffer from access restrictions or subscription costs")
models=[chatgpt,gemini,claude]
while True:
    print("Choose the AI model")
    print("1.Chat GPT\n2.Gemini\n3.Claude")
    a=int(input("Enter your choice (1-3) 4 to exit script"))
    if(a>=1 and a<=3):
        print(models[a-1].display())
    elif(a==4):
        print("Exiting Script......")
        break
    else:
        print("Invalid choice")
    print("\n")
